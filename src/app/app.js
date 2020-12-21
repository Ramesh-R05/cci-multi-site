import AdStore from '@bxm/ad/lib/google/stores/ad';
import ArticleStore from '@bxm/article/lib/stores/articleStore';
import { Flux } from '@bxm/flux';
import HtmlStore from '@bxm/server/lib/stores/html';
import NavigationStore from '@bxm/site-header/lib/stores/navigation';
import VerticalGalleryStore from '@bxm/article/lib/stores/verticalGalleryStore';
import AppComponent from './containers/app';
import PageStore from './stores/page';
import RouteStore from './stores/route';
import SearchStore from './stores/search';
import TeaserStore from './stores/teaser';
import TrackingStore from './stores/tracking';

export const stores = [
    AdStore,
    ArticleStore,
    VerticalGalleryStore,

    HtmlStore,
    NavigationStore,
    PageStore,
    SearchStore,
    RouteStore,
    TeaserStore,
    TrackingStore
];

export default new Flux({
    component: AppComponent,
    stores
});
