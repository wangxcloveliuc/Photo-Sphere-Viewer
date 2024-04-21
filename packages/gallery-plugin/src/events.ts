import { TypedEvent } from '@photo-sphere-viewer/core';
import type { GalleryPlugin } from './GalleryPlugin';
import type { GalleryItem } from './model';

/**
 * @event Triggered when the gallery shown
 */
export class ShowGalleryEvent extends TypedEvent<GalleryPlugin> {
    static override readonly type = 'show-gallery';
    override type: 'show-gallery';

    /** @internal */
    constructor() {
        super(ShowGalleryEvent.type);
    }
}

/**
 * @event Triggered when the gallery hidden
 */
export class HideGalleryEvent extends TypedEvent<GalleryPlugin> {
    static override readonly type = 'hide-gallery';
    override type: 'hide-gallery';

    /** @internal */
    constructor() {
        super(HideGalleryEvent.type);
    }
}

export class ChangeGalleryEvent extends TypedEvent<GalleryPlugin> {
    static override readonly type = 'change-gallery';
    override type: 'change-gallery';

    /** @internal */
    constructor(public readonly item: GalleryItem) {
        super(ChangeGalleryEvent.type);
    }
}

export type GalleryPluginEvents = ShowGalleryEvent | HideGalleryEvent | ChangeGalleryEvent;
