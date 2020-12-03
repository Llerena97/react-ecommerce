import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './../Product'

const Products = () => {
  const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes.', price: '$150', image: 'https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5f0f5ccaaeb26931758862c3/nike_grey_flex_experience_rn_9_lace-up_sports_shoes.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple item.', price: '$2000', image: 'https://cdn.colombia.com/sdi/2016/10/19/apple-revelara-sus-nuevos-mac-el-27-de-octubre-522566.jpg'}
  ]
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
 
export default Products;