import styles from './Products.module.css'

import { useEffect } from 'react'

//components
import ProductCard from '../../../../component/ProductCard'
import Loading from '../../../../component/Loading'
import NotProduct from './NotProduct'

//hooks
import { useFetchProducts } from '../../../../hooks/useFetchProducts'
import { useQuery } from '../../../../hooks/useQuery'

const Products = () => {

  const { fetchProducts, products, loading } = useFetchProducts()

  const query = useQuery()
  const search = query.get('q')

  useEffect(() => {
    fetchProducts(search)
  }, [search])

  return (
    <>
      {loading && <Loading/>}
      {!loading && (
        products.length == 0 ? (
          products.length == 0 && <NotProduct/>
        ) : (
          <div className={styles.products}>
            {products && products.map((product, index) => <ProductCard key={index} product={product}/>)}
          </div>
        )
      )}
      
    </>
  )
}

export default Products