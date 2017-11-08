import { Flux } from '@bxm/flux';
import AppComponent from './containers/app';
import AdStore from '@bxm/ad/lib/google/stores/ad';
import ArticleStore from '@bxm/article/lib/stores/articleStore';
import VerticalGalleryStore from '@bxm/article/lib/stores/verticalGalleryStore';
import GalleryPageStore from '@bxm/gallery/lib/stores/galleryPage';
import GalleryStore from '@bxm/gallery/lib/stores/gallery';
import HtmlStore from '@bxm/server/lib/stores/html';
import NavigationStore from '@bxm/site-header/lib/stores/navigation';
import PageStore from './stores/page';
import PolarAdStore from '@bxm/ad/lib/polar/stores/PolarAdStore';
import RouteStore from './stores/route';
import TeaserStore from './stores/teaser';
import TrackingStore from './stores/tracking';

export default new Flux({
    component: AppComponent,
    stores: [
        AdStore,
        ArticleStore,
        VerticalGalleryStore,
        GalleryPageStore,
        GalleryStore,
        HtmlStore,
        NavigationStore,
        PageStore,
        PolarAdStore,
        RouteStore,
        TeaserStore,
        TrackingStore
    ]
});
