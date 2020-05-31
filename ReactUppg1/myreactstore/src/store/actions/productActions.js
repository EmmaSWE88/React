import actiontypes from '../actiontypes'
// import axios from 'axios'

export const getProduct = (id) => {
    return async dispatch => {
        // const res = await axios.get('http://localhost:9999/api/products/' + id)

        const res = {
            data: 
                { id: '1', name: 'Sony TV-675', shortDescription: "Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos voluptatem fugiat quam officiis, asperiores harum delectus voluptas tenetur rerum! Hic rem dignissimos quia natus quas voluptatem facilis quod maiores!", price: 5755, image: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg", inStockAmount: 100 }
        }

        dispatch(setProduct(res.data))
    }
  }

export const setProduct = (product) => {
    return {
        type: actiontypes().product.set,
        payload: product
    }
}