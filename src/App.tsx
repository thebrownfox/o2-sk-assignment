
import { TextInput } from './components/TextInput'

const App = () => {
  return (
    <div className="main-view">
      <div className="content-container">
        <TextInput
          label="Input"
          placeholder="Placeholder"
          optionalLabel={true}
        />
      </div>
    </div>
  )
}

export default App
