import { NextPage } from 'next'


import dynamic from 'next/dynamic'


const DynamicSearch = dynamic(() => import('../app/components/screens/search/Search'),{
	ssr: false,
})



const SearchPage: NextPage = () => {
	return <DynamicSearch />
}

export default SearchPage
