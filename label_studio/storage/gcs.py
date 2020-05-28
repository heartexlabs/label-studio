import json
import logging

from google.cloud import storage

from .base import CloudStorage, BaseForm, StringField, Optional


logger = logging.getLogger(__name__)


class GCSStorage(CloudStorage):

    description = 'Google Cloud Storage'

    @property
    def readable_path(self):
        return 'gs://' + self.path + '/' + self.prefix

    def _get_client(self):
        client = storage.Client()
        return {
            'client': client,
            'bucket': client.get_bucket(self.path)
        }

    def validate_connection(self):
        pass

    def _get_objects(self):
        logger.debug('Getting GCS blobs from ' + self.path)
        bucket = self.client['bucket']
        files = bucket.list_blobs(prefix=self.prefix)
        return (f.name for f in files if f.name != (self.prefix + '/'))

    def _get_value(self, key):
        bucket = self.client['bucket']
        blob = bucket.blob(key)
        blob_str = blob.download_as_string()
        return json.loads(blob_str)

    def _get_value_url(self, key):
        return {self.data_key: 'gs://' + self.path + '/' + key}

    def _set_value(self, key, value):
        if not isinstance(value, str):
            value = json.dumps(value)
        bucket = self.client['bucket']
        blob = bucket.blob(key)
        blob.upload_from_string(value)


class GCSCompletionsStorageForm(BaseForm):
    prefix = StringField('Prefix', [Optional()], description='GCS Bucket prefix')

    bound_params = dict(
        prefix='prefix'
    )


class GCSCompletionsStorage(GCSStorage):

    form = GCSCompletionsStorageForm

    def _validate_object(self, key):
        value = self._get_value(key)
        if any((
            'completions' not in value,
            'id' not in value,
            not isinstance(value['completions'], list)
        )):
            raise ValueError('Invalid completion format found by key ' + key)
