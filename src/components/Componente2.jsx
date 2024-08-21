import styled from 'styled-components'

const DivComp2 = styled.div`
    border: 2px solid orange;
    padding: 15px;

    p{
        color: orange;
    }


`

export default function Componente2(){

    return(
        <DivComp2>
            <h2>Componente 2</h2>
            <p>Componente com exemplo de Styled-Componente Interno</p>
        </DivComp2>
    )
}