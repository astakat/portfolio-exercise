export const PortfolioItemPage = ({ item }) => {
    return (
        <>
            <h2>Title: {item.title}</h2>
            <p>Description: {item.description}</p>
            <img src={item.imageUrl} width={300} />
        </>
    )
}