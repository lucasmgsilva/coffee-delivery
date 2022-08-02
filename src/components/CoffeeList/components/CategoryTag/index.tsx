import { Category } from '../..'
import { CategoryTagContainer } from './styles'

interface CategoryTagProps {
  category: Category
}

export function CategoryTag({ category }: CategoryTagProps) {
  return <CategoryTagContainer>{category}</CategoryTagContainer>
}
