import DefaultTheme from 'vitepress/theme'
import PortfolioHome from './components/PortfolioHome.vue'
import WorkGrid from './components/WorkGrid.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PortfolioHome', PortfolioHome)
    app.component('WorkGrid', WorkGrid)
  }
}
