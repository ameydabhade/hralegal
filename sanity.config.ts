import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'HRA Legal Website',

  projectId: 'yrzpw3be',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },

  basePath: '/admin',

  studio: {
    components: {
      layout: (props) => {
        return props.renderDefault(props)
      }
    }
  }
}) 