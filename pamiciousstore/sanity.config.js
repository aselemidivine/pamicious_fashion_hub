import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Pamicious_Store',

  projectId: 'yc5nfzkl',
  dataset: 'pamicious',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
