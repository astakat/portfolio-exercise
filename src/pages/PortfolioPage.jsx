import { PortfolioItemCard } from '../components/ui/PortfolioItemCard'
import { portfolioItems } from '../utils/data'
import { SimpleGrid } from '@chakra-ui/react'

export const PortfolioPage = ({ clickFn }) => {
    console.log(portfolioItems)
    console.log(clickFn, "click")
    return (
        <SimpleGrid columns={[1, 2]} spacing={10}>
            {portfolioItems.map((item) => (
                <PortfolioItemCard key={item.id} item={item} clickFn={clickFn} />))}
        </SimpleGrid>
    )
}