const DocsSlugPage = ({params}: {params: {slug: string[]}}) => {
    console.log({slug: params.slug})

    if(params.slug?.length === 2){
        return (<>
        <h1>docs slug concept2 page for {params.slug[0]} and {params.slug[1]}</h1></>)
    }
//params 2 tako case ma mathiko component return hun6
//params 1 ta case ma middle ko component return hun6
    if(params.slug?.length === 1){
        return (<>
        <h1>docs slug concept1 page for {params.slug[0]}</h1></>)
    }

    return (
        <>
            <h1>Docs Slug Page</h1>
        </>
    )
}

export default DocsSlugPage

//docs folder banaunu parcha tespaxi [...slug]  yo garda /docs paxi j lekhepani DocsSlugPage ma pug6
//http://localhost:3000/docs/featcher1/concept1/concept2

//slug is an array of string . kinavane multiple items haru hun6

//console.log({slug: params.slug}) yo garda , yo component server site vayekole browser ma console.log hudaiana
//server component vakole npm run dev garne server mai log aau6 {slug: ["featcher1", "concept1", "concept2"]} aaune vayo

//we deleted page.tsx from docs , now we have only page.tsx from [[...slug]],
//when we do [[...slug]] we can get /docs also. slug nawaye pani DocsSlugPage dekhaidin6
//yedi hamile [...slug] yesari yeutale matra gheryo ani docs bata page.tsx delete garyo vane /docs ma error 404 aauu6
