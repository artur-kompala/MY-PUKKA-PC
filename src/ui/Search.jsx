
import Input from "./Input"
import Button from "./Button"

export default function Search({ query, setQuery }) {
 
  return (
    <>
    <Input
      className="search"
      type="text"
      placeholder="..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />

    <Button>Search</Button>
    </>
    
    
  )
}