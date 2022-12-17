import Header from "../../components/header"
import NewsPostDetails from "../../components/user/newsPostDetails/newsPostDetails"
import { useRouter } from "next/router"
const News = ()=>{
    const router = useRouter();
    return(<>
    <NewsPostDetails {...router.query}></NewsPostDetails>
    </>)
}

export default News