import ExpandableContentCollection from './js/ExpandableContent';
import Header from './js/Header';
import TabsCollection from './js/Tabs';
import defineScrollBarWidthCSSVar from './js/utils/defineScrollBarWidthCSSVar';
import VideoPlayerCollection from './js/VideoPlayer';

new Header();
new TabsCollection();
new VideoPlayerCollection();
new ExpandableContentCollection();

defineScrollBarWidthCSSVar();
