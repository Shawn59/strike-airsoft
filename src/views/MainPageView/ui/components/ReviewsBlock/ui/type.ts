import {StylesType} from "../../../shared/lib";

type StaticStylesKey = 'reviewsCarousel' | 'reviewsRow' | 'marginBottom' | 'col' | 'p' | 'paddingLeft' | 'paddingRight'

type DynamicStyleKey = 'reviewsCol'

export type ReviewsThemeType = StylesType<StaticStylesKey, DynamicStyleKey>