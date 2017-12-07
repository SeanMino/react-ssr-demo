import Router from 'koa-router'
import blog from '../controllers/blog'

const router = new Router();

router.get('/api/article/:article', blog.getArticle);

export default router
