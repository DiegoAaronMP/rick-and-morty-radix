import { Flex, Heading } from '@radix-ui/themes';
import { CharacterList } from './CharacterList';
import { Navbar } from './components/Navbar';


export const RickAndMortyApp = () => {
    return (
        <>
            <Navbar />
            
            <CharacterList />
        </>
    )
}
