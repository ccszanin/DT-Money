import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm(){
  return(
    <SearchFormContainer>
      <input type="text" placeholder="Busue por transações"/>
      <button type="submit">
        <MagnifyingGlass/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}