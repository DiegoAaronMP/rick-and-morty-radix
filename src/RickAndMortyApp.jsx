import { Grid } from '@radix-ui/themes';
import { CharacterList } from './CharacterList';


export const RickAndMortyApp = () => {
  return (
    <Grid columns="1" gap="3" width="100%">
        <CharacterList />
    </Grid>
  )
}
