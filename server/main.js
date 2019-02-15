(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && google && google.maps) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                        _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                        _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.ngfactory.js":
/*!************************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
var i2 = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var i3 = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
var i4 = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
var i5 = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
var i6 = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
var i7 = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
var i8 = __webpack_require__(/*! ../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
var i9 = __webpack_require__(/*! ../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
var i10 = __webpack_require__(/*! ../services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var i11 = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
var i12 = __webpack_require__(/*! ./map */ "./node_modules/@agm/core/directives/map.js");
var styles_AgmMap = [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"];
var RenderType_AgmMap = i0.ɵcrt({ encapsulation: 0, styles: styles_AgmMap, data: {} });
exports.RenderType_AgmMap = RenderType_AgmMap;
function View_AgmMap_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "agm-map-container-inner sebm-google-map-container-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "agm-map-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_AgmMap_0 = View_AgmMap_0;
function View_AgmMap_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, View_AgmMap_0, RenderType_AgmMap)), i0.ɵprd(4608, null, i1.MarkerManager, i1.MarkerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i3.InfoWindowManager, i3.InfoWindowManager, [i2.GoogleMapsAPIWrapper, i0.NgZone, i1.MarkerManager]), i0.ɵprd(4608, null, i4.CircleManager, i4.CircleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i5.RectangleManager, i5.RectangleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i6.PolylineManager, i6.PolylineManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i7.PolygonManager, i7.PolygonManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i8.KmlLayerManager, i8.KmlLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i9.DataLayerManager, i9.DataLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(512, null, i2.GoogleMapsAPIWrapper, i2.GoogleMapsAPIWrapper, [i10.MapsAPILoader, i0.NgZone]), i0.ɵprd(512, null, i11.FitBoundsService, i11.FitBoundsService, [i10.MapsAPILoader]), i0.ɵdid(11, 770048, null, 0, i12.AgmMap, [i0.ElementRef, i2.GoogleMapsAPIWrapper, i11.FitBoundsService], null, null)], function (_ck, _v) { _ck(_v, 11, 0); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
exports.View_AgmMap_Host_0 = View_AgmMap_Host_0;
var AgmMapNgFactory = i0.ɵccf("agm-map", i12.AgmMap, View_AgmMap_Host_0, { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", draggable: "mapDraggable", disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", styles: "styles", usePanning: "usePanning", streetViewControl: "streetViewControl", streetViewControlOptions: "streetViewControlOptions", fitBounds: "fitBounds", scaleControl: "scaleControl", scaleControlOptions: "scaleControlOptions", mapTypeControl: "mapTypeControl", mapTypeControlOptions: "mapTypeControlOptions", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", rotateControlOptions: "rotateControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", gestureHandling: "gestureHandling" }, { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady" }, ["*"]);
exports.AgmMapNgFactory = AgmMapNgFactory;


/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./src/app/about/about.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/about/about.component.ngfactory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./about.component.scss.shim.ngstyle */ "./src/app/about/about.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var styles_AboutComponent = [i0.styles];
var RenderType_AboutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AboutComponent, data: {} });
exports.RenderType_AboutComponent = RenderType_AboutComponent;
function View_AboutComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "head", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School Management ERP In India | Education ERP Software | E-Saraswati"])), (_l()(), i1.ɵeld(3, 0, null, null, 0, "meta", [["content", "E-Saraswati is a comprehensive school management ERP consisting of a wide array of features to manage all your school processes in an efficient and cost-effective manner. Visit to know more about our school ERP software!"], ["name", "description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "meta", [["content", "School ERP Software, School Management ERP, School ERP Software India, Education ERP India, School ERP, ERP School Management Software, School ERP System, School Management System ERP, ERP Software For School In India, School ERP Software In India"], ["name", "keywords"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "meta", [["content", "!"], ["name", "fragment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "link", [["href", "http://e-saraswati.org/about"], ["rel", "canonical"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 22, "div", [["class", "about_content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 21, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 20, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 19, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-SARASWATI Introduction"])), (_l()(), i1.ɵeld(14, 0, null, null, 5, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 2, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["A complete school application to redefine the future of school & institution in India."])), (_l()(), i1.ɵeld(18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-SARASWATI is a unique and comprehensive ERP product with an interactive platform for all entities viz. Students, Teachers, Management, Parents, Alumni, Guests, and Experts of an educational institution. This education ERP software very gracefully handles all the requirements for easy school/college management as it has been designed after understanding the different processes & approaches adopted by various educational institutes of India. We understand that your school/institution is unique and so are your requirements. You need a solution, a custom app, built just for those needs. You don\u2019t need to be an \u201CApp Master\u201D nor do you need a programmer\u2019s help to understand your app. An idea is all you need to make perfection a reality."])), (_l()(), i1.ɵeld(20, 0, null, null, 2, "div", [["class", "sub-heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Overview"])), (_l()(), i1.ɵeld(23, 0, null, null, 6, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["In today\u2019s era that is in total control of technology, administration & management of organizations, specifically educational institutions, has become a tedious and intricate task. It requires careful planning, systematic approach and exact control of administrative processes to attract the best students, produce best results and project the best image. Coupled with high competition from the industry, these institutions are increasingly seeking the help of information technology to improvise their facilities and maintain a competitive edge to their educational business."])), (_l()(), i1.ɵeld(26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["RIPL liberates you with the easiest custom project work as automates school management system for your own school/institutions."])), (_l()(), i1.ɵeld(28, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-SARASWATI is a fully integrated, automated and web-based ERP system that has solutions of being dedicated to activities associated with managing the student learning and assessment. It\u2019s integrated and web approach reduces management costs, minimizes paperwork and brings in accountability in every single operation, enhancing communication among the students, teachers, management staff and parents. Its single sign-on feature gives the flexibility to integrate with existing or new software systems. E-SARASWATI leverage institution to reach out to public, alumni and prospective students. This gives chance for fundraising opportunities and more student admissions every year."]))], null, null); }
exports.View_AboutComponent_0 = View_AboutComponent_0;
function View_AboutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), i1.ɵdid(1, 114688, null, 0, i2.AboutComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AboutComponent_Host_0 = View_AboutComponent_Host_0;
var AboutComponentNgFactory = i1.ɵccf("app-about", i2.AboutComponent, View_AboutComponent_Host_0, {}, {}, []);
exports.AboutComponentNgFactory = AboutComponentNgFactory;


/***/ }),

/***/ "./src/app/about/about.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/about/about.component.scss.shim.ngstyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".about_content[_ngcontent-%COMP%] {\n  font-family: myFirstFont;\n  padding: 40px 0 40px 0;\n  background: #fff; }\n\n.heading_line[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  text-align: center;\n   }\n\n.heading_line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: #fa7606;\n    margin-bottom: 1rem; }\n\n.para_line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .para_line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 1rem; }\n\n.sub-heading_line[_ngcontent-%COMP%] {\n  text-align: center; }\n\n.sub-heading_line[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #fa7606;\n    font-size: 24px;\n    margin-bottom: 1rem; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i4 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i5 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i6 = __webpack_require__(/*! ./demo.service */ "./src/app/demo.service.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email is required"]))], null, null); }
function View_AppComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email must be a valid email address."]))], null, null); }
function View_AppComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger error_msg_try"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AppComponent_2)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AppComponent_3)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.m.email1.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.m.email1.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 69, "header", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 68, "div", [["class", "container-fluid head-contain"]], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 67, "div", [["class", "container nav_contain"]], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 35, "div", [["id", "topheader"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 34, "nav", [["class", "mb-4 navbar navbar-expand-lg navbar-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 2, "a", [["class", "navbar-brand"], ["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(6, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 0, "img", [["alt", "e-saraswati"], ["class", "logo_img"], ["src", "assets/images/logo_small.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 1, "button", [["aria-controls", "navbarSupportedContent-4"], ["aria-expanded", "false"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler"], ["data-target", "#navbarSupportedContent-4"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 0, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 28, "div", [["class", "collapse navbar-collapse"], ["id", "navbarSupportedContent-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 27, "ul", [["class", "navbar-nav ml-auto"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 3, "a", [["class", "nav-link"], ["routerLink", "about"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(14, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(15, 0, null, null, 0, "i", [["class", "fa fa-arrows"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" ABOUT "])), (_l()(), i1.ɵeld(17, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 3, "a", [["class", "nav-link"], ["routerLink", "product"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(19, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(20, 0, null, null, 0, "i", [["class", "fa fa-product-hunt"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" PRODUCT"])), (_l()(), i1.ɵeld(22, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 3, "a", [["class", "nav-link"], ["routerLink", "pricing"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(24, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(25, 0, null, null, 0, "i", [["class", "fa fa-money"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" PRICING & PLANS"])), (_l()(), i1.ɵeld(27, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 3, "a", [["class", "nav-link"], ["routerLink", "contact"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 29).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(29, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(30, 0, null, null, 0, "i", [["class", "fa fa-map-marker"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" CONTACT US"])), (_l()(), i1.ɵeld(32, 0, null, null, 2, "li", [["class", "nav-item try_demo"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "a", [["class", "nav-link demo_link peach-gradient waves-effect"], ["data-target", "#myModal_demo"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" TRY DEMO"])), (_l()(), i1.ɵeld(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 1, "button", [["class", "btn call_btn_h"], ["data-container", "body"], ["data-content", "<div><b>+91-9131708587</b><br>OR<br><b>+91-731 2427076</b></div>"], ["data-html", "true"], ["data-original-title", "Call Us"], ["data-placement", "bottom"], ["data-toggle", "popover"], ["data-trigger", "focus"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 0, "i", [["class", "fa fa-phone"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 30, "div", [["class", "modal fade"], ["id", "myModal_demo"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 29, "div", [["class", "modal-dialog modal-lg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 28, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(45, 0, null, null, 24, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 1, "h6", [["class", "trial_head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Start Your 14 Days Free Trial"])), (_l()(), i1.ɵeld(48, 0, null, null, 21, "form", [["class", "demo_try_form"], ["method", "POST"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 50).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 50).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendMail(i1.ɵnov(_v, 55).value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(49, 16384, null, 0, i4.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(50, 540672, null, 0, i4.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i4.ControlContainer, null, [i4.FormGroupDirective]), i1.ɵdid(52, 16384, null, 0, i4.NgControlStatusGroup, [[4, i4.ControlContainer]], null, null), (_l()(), i1.ɵeld(53, 0, null, null, 16, "div", [["class", "form-group email_demo_form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 15, "div", [["class", "input-group mb-3 email-input_try"]], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, [["email1", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "email1"], ["pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"], ["placeholder", "Your Email Address"], ["type", "email"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 58)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 58).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 58)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 58)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(56, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(57, { "is-invalid": 0 }), i1.ɵdid(58, 16384, null, 0, i4.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i4.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(59, 540672, null, 0, i4.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i4.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i4.PatternValidator]), i1.ɵprd(1024, null, i4.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i4.DefaultValueAccessor]), i1.ɵdid(62, 671744, null, 0, i4.FormControlName, [[3, i4.ControlContainer], [6, i4.NG_VALIDATORS], [8, null], [6, i4.NG_VALUE_ACCESSOR], [2, i4.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i4.NgControl, null, [i4.FormControlName]), i1.ɵdid(64, 16384, null, 0, i4.NgControlStatus, [[4, i4.NgControl]], null, null), (_l()(), i1.ɵeld(65, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 1, "button", [["class", "btn peach-gradient btn-raised waves-effect free_demo"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Get Your Free Demo"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AppComponent_1)), i1.ɵdid(69, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(70, 16777216, null, null, 1, "router-outlet", [], null, [[null, "activate"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("activate" === en)) {
        var pd_0 = (_co.onActivate($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(71, 212992, null, 0, i3.RouterOutlet, [i3.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, { activateEvents: "activate" }), (_l()(), i1.ɵeld(72, 0, null, null, 99, "footer", [], null, null, null, null, null)), (_l()(), i1.ɵeld(73, 0, null, null, 79, "div", [["class", "container-fluid footer-contain"]], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 78, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 77, "div", [["class", "row main-foot"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 5, "div", [["class", "col-md-4 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 0, "img", [["alt", "E-Saraswati erp"], ["class", "footer-img"], ["src", "assets/images/logo_small.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 1, "p", [["class", "name_soft"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-SARASWATI"])), (_l()(), i1.ɵeld(80, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School Management Software"])), (_l()(), i1.ɵeld(82, 0, null, null, 34, "div", [["class", "col-md-4 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 1, "p", [["class", "add_links"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["QUICK LINKS"])), (_l()(), i1.ɵeld(85, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵeld(86, 0, null, null, 2, "a", [["class", "quick_links"], ["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 87).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(87, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Home"])), (_l()(), i1.ɵeld(89, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 2, "a", [["class", "quick_links"], ["routerLink", "about"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 91).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(91, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Why E-Saraswati?"])), (_l()(), i1.ɵeld(93, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵeld(94, 0, null, null, 2, "a", [["class", "quick_links"], ["routerLink", "product"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 95).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(95, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Product"])), (_l()(), i1.ɵeld(97, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵeld(98, 0, null, null, 2, "a", [["class", "quick_links"], ["routerLink", "pricing"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 99).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(99, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Pricing & Plans"])), (_l()(), i1.ɵeld(101, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 2, "a", [["class", "quick_links"], ["routerLink", "mobile-app"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 103).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(103, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Mobile App"])), (_l()(), i1.ɵeld(105, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵeld(106, 0, null, null, 2, "a", [["class", "quick_links"], ["routerLink", "client"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 107).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(107, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Our Clients"])), (_l()(), i1.ɵeld(109, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵeld(110, 0, null, null, 2, "a", [["class", "quick_links"], ["routerLink", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 111).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(111, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Testimonial"])), (_l()(), i1.ɵeld(113, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵeld(114, 0, null, null, 2, "a", [["class", "quick_links"], ["routerLink", "contact"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 115).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(115, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Contact"])), (_l()(), i1.ɵeld(117, 0, null, null, 35, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(118, 0, null, null, 1, "p", [["class", "add_contact"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CONTACT"])), (_l()(), i1.ɵeld(120, 0, null, null, 12, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(121, 0, null, null, 2, "div", [["class", "col-sm-2 con_icons"]], null, null, null, null, null)), (_l()(), i1.ɵeld(122, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["map"])), (_l()(), i1.ɵeld(124, 0, null, null, 8, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), i1.ɵeld(125, 0, null, null, 1, "h6", [["class", "add_head"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ERipples Infomatics Pvt Ltd"])), (_l()(), i1.ɵeld(127, 0, null, null, 5, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["512, Shagun Arcade"])), (_l()(), i1.ɵeld(129, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Near Vijay Nagar Square"])), (_l()(), i1.ɵeld(131, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Indore (M.P.) - 452010, INDIA"])), (_l()(), i1.ɵeld(133, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(134, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(135, 0, null, null, 2, "div", [["class", "col-sm-2 con_icons"]], null, null, null, null, null)), (_l()(), i1.ɵeld(136, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["smartphone"])), (_l()(), i1.ɵeld(138, 0, null, null, 4, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), i1.ɵeld(139, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" +91-731 2427076"])), (_l()(), i1.ɵeld(141, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" +91-9131708587 "])), (_l()(), i1.ɵeld(143, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(144, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(145, 0, null, null, 2, "div", [["class", "col-sm-2 con_icons"]], null, null, null, null, null)), (_l()(), i1.ɵeld(146, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["mail_outline"])), (_l()(), i1.ɵeld(148, 0, null, null, 4, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), i1.ɵeld(149, 0, null, null, 3, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" sales@ripplesinfomatics.com"])), (_l()(), i1.ɵeld(151, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" info@ripplesinfomatics.com "])), (_l()(), i1.ɵeld(153, 0, null, null, 0, "hr", [["class", "separator_btm"]], null, null, null, null, null)), (_l()(), i1.ɵeld(154, 0, null, null, 17, "div", [["class", "container-fluid bottom-contain"]], null, null, null, null, null)), (_l()(), i1.ɵeld(155, 0, null, null, 16, "div", [["class", "row end-foot"]], null, null, null, null, null)), (_l()(), i1.ɵeld(156, 0, null, null, 15, "div", [["class", "col-md-12 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(157, 0, null, null, 4, "h6", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00A9 2017-18 E-SARASWATI- All rights reserved And Website Designed by "])), (_l()(), i1.ɵeld(159, 0, null, null, 2, "span", [["class", "copy_link"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.eripl_link() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(160, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ERipples Infomatics Pvt. Ltd. (RIPL)."])), (_l()(), i1.ɵeld(162, 0, null, null, 9, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), i1.ɵeld(163, 0, null, null, 8, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(164, 0, null, null, 1, "li", [["class", "facebook"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.fb_link() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(165, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-facebook fa-2x"]], null, null, null, null, null)), (_l()(), i1.ɵeld(166, 0, null, null, 1, "li", [["class", "twitter"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.twitter_link() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(167, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-twitter fa-2x"]], null, null, null, null, null)), (_l()(), i1.ɵeld(168, 0, null, null, 1, "li", [["class", "instagram"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.insta_link() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(169, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-instagram fa-2x"]], null, null, null, null, null)), (_l()(), i1.ɵeld(170, 0, null, null, 1, "li", [["class", "linkedin"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.linkedin_link() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵeld(171, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-linkedin fa-2x"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = ""; _ck(_v, 6, 0, currVal_2); var currVal_5 = "about"; _ck(_v, 14, 0, currVal_5); var currVal_8 = "product"; _ck(_v, 19, 0, currVal_8); var currVal_11 = "pricing"; _ck(_v, 24, 0, currVal_11); var currVal_14 = "contact"; _ck(_v, 29, 0, currVal_14); var currVal_22 = _co.demoForm; _ck(_v, 50, 0, currVal_22); var currVal_31 = "form-control"; var currVal_32 = _ck(_v, 57, 0, (_co.submitted && _co.m.email1.errors)); _ck(_v, 56, 0, currVal_31, currVal_32); var currVal_33 = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; _ck(_v, 59, 0, currVal_33); var currVal_34 = "email1"; _ck(_v, 62, 0, currVal_34); var currVal_35 = (_co.submitted && _co.m.email1.errors); _ck(_v, 69, 0, currVal_35); _ck(_v, 71, 0); var currVal_38 = ""; _ck(_v, 87, 0, currVal_38); var currVal_41 = "about"; _ck(_v, 91, 0, currVal_41); var currVal_44 = "product"; _ck(_v, 95, 0, currVal_44); var currVal_47 = "pricing"; _ck(_v, 99, 0, currVal_47); var currVal_50 = "mobile-app"; _ck(_v, 103, 0, currVal_50); var currVal_53 = "client"; _ck(_v, 107, 0, currVal_53); var currVal_56 = ""; _ck(_v, 111, 0, currVal_56); var currVal_59 = "contact"; _ck(_v, 115, 0, currVal_59); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 6).target; var currVal_1 = i1.ɵnov(_v, 6).href; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_3 = i1.ɵnov(_v, 14).target; var currVal_4 = i1.ɵnov(_v, 14).href; _ck(_v, 13, 0, currVal_3, currVal_4); var currVal_6 = i1.ɵnov(_v, 19).target; var currVal_7 = i1.ɵnov(_v, 19).href; _ck(_v, 18, 0, currVal_6, currVal_7); var currVal_9 = i1.ɵnov(_v, 24).target; var currVal_10 = i1.ɵnov(_v, 24).href; _ck(_v, 23, 0, currVal_9, currVal_10); var currVal_12 = i1.ɵnov(_v, 29).target; var currVal_13 = i1.ɵnov(_v, 29).href; _ck(_v, 28, 0, currVal_12, currVal_13); var currVal_15 = i1.ɵnov(_v, 52).ngClassUntouched; var currVal_16 = i1.ɵnov(_v, 52).ngClassTouched; var currVal_17 = i1.ɵnov(_v, 52).ngClassPristine; var currVal_18 = i1.ɵnov(_v, 52).ngClassDirty; var currVal_19 = i1.ɵnov(_v, 52).ngClassValid; var currVal_20 = i1.ɵnov(_v, 52).ngClassInvalid; var currVal_21 = i1.ɵnov(_v, 52).ngClassPending; _ck(_v, 48, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_23 = (i1.ɵnov(_v, 59).pattern ? i1.ɵnov(_v, 59).pattern : null); var currVal_24 = i1.ɵnov(_v, 64).ngClassUntouched; var currVal_25 = i1.ɵnov(_v, 64).ngClassTouched; var currVal_26 = i1.ɵnov(_v, 64).ngClassPristine; var currVal_27 = i1.ɵnov(_v, 64).ngClassDirty; var currVal_28 = i1.ɵnov(_v, 64).ngClassValid; var currVal_29 = i1.ɵnov(_v, 64).ngClassInvalid; var currVal_30 = i1.ɵnov(_v, 64).ngClassPending; _ck(_v, 55, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_36 = i1.ɵnov(_v, 87).target; var currVal_37 = i1.ɵnov(_v, 87).href; _ck(_v, 86, 0, currVal_36, currVal_37); var currVal_39 = i1.ɵnov(_v, 91).target; var currVal_40 = i1.ɵnov(_v, 91).href; _ck(_v, 90, 0, currVal_39, currVal_40); var currVal_42 = i1.ɵnov(_v, 95).target; var currVal_43 = i1.ɵnov(_v, 95).href; _ck(_v, 94, 0, currVal_42, currVal_43); var currVal_45 = i1.ɵnov(_v, 99).target; var currVal_46 = i1.ɵnov(_v, 99).href; _ck(_v, 98, 0, currVal_45, currVal_46); var currVal_48 = i1.ɵnov(_v, 103).target; var currVal_49 = i1.ɵnov(_v, 103).href; _ck(_v, 102, 0, currVal_48, currVal_49); var currVal_51 = i1.ɵnov(_v, 107).target; var currVal_52 = i1.ɵnov(_v, 107).href; _ck(_v, 106, 0, currVal_51, currVal_52); var currVal_54 = i1.ɵnov(_v, 111).target; var currVal_55 = i1.ɵnov(_v, 111).href; _ck(_v, 110, 0, currVal_54, currVal_55); var currVal_57 = i1.ɵnov(_v, 115).target; var currVal_58 = i1.ɵnov(_v, 115).href; _ck(_v, 114, 0, currVal_57, currVal_58); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i5.AppComponent, [i4.FormBuilder, i6.DemoService, i1.PLATFORM_ID, i1.APP_ID], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i5.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["@font-face {\n  font-family: myFirstFont;\n  src: url(\"/assets/fonts/Calibri.ttf\"); }\n\nheader[_ngcontent-%COMP%] {\n  font-family: myFirstFont; }\n\n.head-contain[_ngcontent-%COMP%] {\n  background: #fbfafa; }\n\n.logo_img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto; }\n\n.demo_link[_ngcontent-%COMP%] {\n  color: #fff !important;\n  border: 1px solid #ec5c33;\n  border-radius: 5px; }\n\n.free_demo[_ngcontent-%COMP%] {\n  color: #fff; }\n\n.nav-item[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.header_contain[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0; }\n\nfooter[_ngcontent-%COMP%] {\n  font-family: myFirstFont; }\n\n.footer-contain[_ngcontent-%COMP%] {\n  background: #3d3d3f;\n  color: #fff;\n  padding: 20px 0 20px 0;\n  letter-spacing: 1px; }\n\n.bottom-contain[_ngcontent-%COMP%] {\n  background: #3d3d3f;\n  color: #fff;\n  letter-spacing: 1px;\n  padding: 10px 0 10px 0; }\n\n.footer-img[_ngcontent-%COMP%] {\n  width: 100;\n  margin: auto; }\n\n.separator_btm[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.name_soft[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n  font-size: 20px;\n  font-weight: 700; }\n\n.add_head[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px; }\n\n.add_links[_ngcontent-%COMP%], .add_contact[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center; }\n\n.quick_links[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none; }\n\n.quick_links[_ngcontent-%COMP%]:hover {\n    color: #ec5c33;\n    text-decoration: none; }\n\n.copy_link[_ngcontent-%COMP%] {\n  color: #ec5c33 !important;\n  text-decoration: none;\n  cursor: pointer; }\n\n.copy_link[_ngcontent-%COMP%]:hover {\n    color: #fff !important;\n    text-decoration: none; }\n\n.con_icons[_ngcontent-%COMP%] {\n  text-align: left; }\n\n\n\n.wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-block; }\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none; }\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin: 0 10px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50%;\n  border: 3px solid #D8E2DC;\n  float: left;\n  transition: all 0.5s ease; }\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #D8E2DC;\n  margin-top: 0px;\n  transition: all 0.5s ease; }\n\n\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover.facebook {\n  border: 3px solid #3b5998;\n  box-shadow: 0 0 15px #3b5998;\n  transition: all 0.5s ease; }\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .fa-facebook[_ngcontent-%COMP%] {\n  color: #3b5998;\n  text-shadow: 0 0 15px #3b5998;\n  transition: all 0.5s ease; }\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover.twitter {\n  border: 3px solid #00aced;\n  box-shadow: 0 0 15px #00aced;\n  transition: all 0.5s ease; }\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .fa-twitter[_ngcontent-%COMP%] {\n  color: #00aced;\n  text-shadow: 0 0 15px #00aced;\n  transition: all 0.5s ease; }\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover.instagram {\n  border: 3px solid #bc2a8d;\n  box-shadow: 0 0 15px #bc2a8d;\n  transition: all 0.5s ease; }\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .fa-instagram[_ngcontent-%COMP%] {\n  color: #bc2a8d;\n  text-shadow: 0 0 15px #bc2a8d;\n  transition: all 0.5s ease; }\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover.google {\n  border: 3px solid #dd4b39;\n  box-shadow: 0 0 15px #dd4b39;\n  transition: all 0.5s ease; }\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .fa-google[_ngcontent-%COMP%] {\n  color: #dd4b39;\n  text-shadow: 0 0 15px #dd4b39;\n  transition: all 0.5s ease; }\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover.whatsapp {\n  border: 3px solid #4dc247;\n  box-shadow: 0 0 15px #4dc247;\n  transition: all 0.5s ease; }\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .fa-whatsapp[_ngcontent-%COMP%] {\n  color: #4dc247;\n  text-shadow: 0 0 15px #4dc247;\n  transition: all 0.5s ease; }\n\n\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover.linkedin {\n  border: 3px solid #0077B5;\n  box-shadow: 0 0 15px #0077B5;\n  transition: all 0.5s ease; }\n\n.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .fa-linkedin[_ngcontent-%COMP%] {\n  color: #0077B5;\n  text-shadow: 0 0 15px #0077B5;\n  transition: all 0.5s ease; }\n\n.fa-2x[_ngcontent-%COMP%] {\n  font-size: 20px; }\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important; }\n\n.trial_head[_ngcontent-%COMP%] {\n  color: #ec5c33;\n  font-size: 22px;\n  text-align: center;\n  font-weight: 700;\n  padding-bottom: 20px; }\n\n.btn-default[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);\n  color: #fff; }\n\n.close[_ngcontent-%COMP%] {\n  padding: 0rem;\n  font-size: 2.5rem; }\n\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 10px; }\n\n.hm-gradient[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%); }\n\n.darken-grey-text[_ngcontent-%COMP%] {\n  color: #2E2E2E;\n  color: #2E2E2E; }\n\n.navbar[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #616161 !important; }\n\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-bottom: 0rem !important; }\n\n.navbar[_ngcontent-%COMP%] {\n  box-shadow: none; }\n\n.navbar.navbar-light[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .navbar.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 15px; }\n\n.navbar.navbar-light[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar.navbar-light[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .navbar.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n    color: #ec5c33; }\n\n.call_btn_h[_ngcontent-%COMP%] {\n  margin-top: 0; }\n\n#topheader[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #ec5c33; }\n\n.error_msg_try[_ngcontent-%COMP%] {\n  color: red;\n  background-color: #fff;\n  border-color: #fccac7;\n  padding: 0px;\n  margin-top: 0rem;\n  margin-bottom: 0rem; }\n\n.email-input_try[_ngcontent-%COMP%] {\n  margin-bottom: 0rem !important; }\n\n.email_demo_form[_ngcontent-%COMP%] {\n  margin-bottom: 0rem; }\n\n.demo_try_form[_ngcontent-%COMP%] {\n  margin-bottom: 0rem; }\n\n\n\n@media screen and (max-width: 640px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 350px; }\n  .wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-top: 10px; }\n  .wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.google[_ngcontent-%COMP%] {\n    margin-left: 60px; } }\n\n@media screen and (max-width: 340px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 150px; }\n  .wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 15px; }\n  .wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.google[_ngcontent-%COMP%] {\n    margin-left: 15px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var demo_service_1 = __webpack_require__(/*! ./demo.service */ "./src/app/demo.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
//import { DOCUMENT } from '@angular/platform-browser';
//import { LOCAL_STORAGE , WINDOW} from '@ng-toolkit/universal';
var AppComponent = /** @class */ (function () {
    function AppComponent(fb, demoService, platformId, appId) {
        this.fb = fb;
        this.demoService = demoService;
        this.platformId = platformId;
        this.appId = appId;
        this.submitted = false;
        this.createDemo();
    }
    AppComponent.prototype.createDemo = function () {
        this.demoForm = this.fb.group({
            email1: ['', forms_1.Validators.required]
        });
    };
    Object.defineProperty(AppComponent.prototype, "m", {
        get: function () {
            //console.log(this.demoForm.controls);
            return this.demoForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.sendMail = function (email1) {
        this.submitted = true;
        if (this.demoForm.valid) {
            this.demoService.sendEmail(email1).subscribe(function (success) {
                console.log('Demo request sent');
            }, function (error) {
                console.log('Something went wrong');
            });
            alert('Your e-mail has been sent!!!');
        }
        else {
            return;
        }
    };
    AppComponent.prototype.onActivate = function (event) {
        if (common_1.isPlatformBrowser(this.platformId)) {
            var scrollToTop_1 = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 50); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop_1);
                }
            }, 16);
        }
    };
    AppComponent.prototype.eripl_link = function () {
        window.location.href = 'http://www.ripplesinfomatics.com/';
    };
    AppComponent.prototype.fb_link = function () {
        window.location.href = 'https://www.facebook.com/RInfomatics/';
    };
    AppComponent.prototype.twitter_link = function () {
        window.location.href = 'https://twitter.com/RInfomatics/';
    };
    AppComponent.prototype.linkedin_link = function () {
        window.location.href = 'https://www.linkedin.com/company/rinfomatics/';
    };
    AppComponent.prototype.insta_link = function () {
        window.location.href = 'https://www.instagram.com/rinfomatics/';
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i4 = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
var i5 = __webpack_require__(/*! ./about/about.component.ngfactory */ "./src/app/about/about.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./product/product.component.ngfactory */ "./src/app/product/product.component.ngfactory.js");
var i7 = __webpack_require__(/*! ./price/price.component.ngfactory */ "./src/app/price/price.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./contact/contact.component.ngfactory */ "./src/app/contact/contact.component.ngfactory.js");
var i9 = __webpack_require__(/*! ./mobile/mobile.component.ngfactory */ "./src/app/mobile/mobile.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./client/client.component.ngfactory */ "./src/app/client/client.component.ngfactory.js");
var i11 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i12 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i13 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i14 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i15 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i16 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i17 = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
var i18 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i19 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i20 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i21 = __webpack_require__(/*! @agm/core/utils/browser-globals */ "@agm/core/utils/browser-globals");
var i22 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i23 = __webpack_require__(/*! @agm/core/services/maps-api-loader/lazy-maps-api-loader */ "@agm/core/services/maps-api-loader/lazy-maps-api-loader");
var i24 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i25 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i26 = __webpack_require__(/*! @agm/core/core.module */ "@agm/core/core.module");
var i27 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i28 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var i29 = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var i30 = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
var i31 = __webpack_require__(/*! ./price/price.component */ "./src/app/price/price.component.ts");
var i32 = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var i33 = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
var i34 = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
var i35 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵEmptyOutletComponentNgFactory, i4.HomeComponentNgFactory, i5.AboutComponentNgFactory, i6.ProductComponentNgFactory, i7.PriceComponentNgFactory, i8.ContactComponentNgFactory, i9.MobileComponentNgFactory, i10.ClientComponentNgFactory, i11.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i12.NgLocalization, i12.NgLocaleLocalization, [i0.LOCALE_ID, [2, i12.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i13.DomSanitizer, i13.ɵDomSanitizerImpl, [i12.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i13.DomSanitizer]), i0.ɵmpd(4608, i13.HAMMER_GESTURE_CONFIG, i13.HammerGestureConfig, []), i0.ɵmpd(5120, i13.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i13.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i13.ɵKeyEventsPlugin(p1_0), new i13.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i14.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i12.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i12.DOCUMENT, i12.DOCUMENT, i13.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i13.HAMMER_LOADER], i13.DOCUMENT]), i0.ɵmpd(4608, i13.EventManager, i13.EventManager, [i13.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i13.ɵDomSharedStylesHost, i13.ɵDomSharedStylesHost, [i12.DOCUMENT]), i0.ɵmpd(4608, i13.ɵDomRendererFactory2, i13.ɵDomRendererFactory2, [i13.EventManager, i13.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i14.ɵangular_packages_platform_server_platform_server_c, i14.ɵangular_packages_platform_server_platform_server_c, [i13.DOCUMENT, [2, i13.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i13.ɵSharedStylesHost, null, [i14.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i14.ɵServerRendererFactory2, i14.ɵServerRendererFactory2, [i13.EventManager, i0.NgZone, i13.DOCUMENT, i13.ɵSharedStylesHost]), i0.ɵmpd(4608, i15.AnimationDriver, i15.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i15.ɵAnimationStyleNormalizer, i16.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i15.ɵAnimationEngine, i16.ɵangular_packages_platform_browser_animations_animations_a, [i12.DOCUMENT, i15.AnimationDriver, i15.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i14.ɵangular_packages_platform_server_platform_server_a, [i14.ɵServerRendererFactory2, i15.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i17.ɵa, i17.ɵa, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i17.WINDOW, i17.windowFactory, [i17.ɵa]), i0.ɵmpd(4608, i17.DocumentService, i17.DocumentService, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i17.NGT_DOCUMENT, i17.documentFactory, [i17.DocumentService]), i0.ɵmpd(4608, i17.ɵb, i17.ɵb, [i0.PLATFORM_ID]), i0.ɵmpd(5120, i17.LOCAL_STORAGE, i17.localStorageFactory, [i17.ɵb]), i0.ɵmpd(4608, i18.ɵangular_packages_forms_forms_i, i18.ɵangular_packages_forms_forms_i, []), i0.ɵmpd(4608, i19.BrowserXhr, i14.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i19.ResponseOptions, i19.BaseResponseOptions, []), i0.ɵmpd(4608, i19.XSRFStrategy, i14.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i19.XHRBackend, i19.XHRBackend, [i19.BrowserXhr, i19.ResponseOptions, i19.XSRFStrategy]), i0.ɵmpd(4608, i19.RequestOptions, i19.BaseRequestOptions, []), i0.ɵmpd(5120, i19.Http, i14.ɵangular_packages_platform_server_platform_server_g, [i19.XHRBackend, i19.RequestOptions]), i0.ɵmpd(4608, i18.FormBuilder, i18.FormBuilder, []), i0.ɵmpd(4608, i20.HttpXsrfTokenExtractor, i20.ɵangular_packages_common_http_http_g, [i12.DOCUMENT, i0.PLATFORM_ID, i20.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i20.ɵangular_packages_common_http_http_h, i20.ɵangular_packages_common_http_http_h, [i20.HttpXsrfTokenExtractor, i20.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i20.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i20.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i20.XhrFactory, i14.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i20.HttpXhrBackend, i20.HttpXhrBackend, [i20.XhrFactory]), i0.ɵmpd(6144, i20.HttpBackend, null, [i20.HttpXhrBackend]), i0.ɵmpd(5120, i20.HttpHandler, i14.ɵangular_packages_platform_server_platform_server_h, [i20.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i20.HttpClient, i20.HttpClient, [i20.HttpHandler]), i0.ɵmpd(4608, i20.ɵangular_packages_common_http_http_d, i20.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i21.WindowRef, i21.WindowRef, []), i0.ɵmpd(4608, i21.DocumentRef, i21.DocumentRef, []), i0.ɵmpd(4608, i22.MapsAPILoader, i23.LazyMapsAPILoader, [[2, i23.LAZY_MAPS_API_CONFIG], i21.WindowRef, i21.DocumentRef]), i0.ɵmpd(5120, i24.ActivatedRoute, i24.ɵangular_packages_router_router_g, [i24.Router]), i0.ɵmpd(4608, i24.NoPreloading, i24.NoPreloading, []), i0.ɵmpd(6144, i24.PreloadingStrategy, null, [i24.NoPreloading]), i0.ɵmpd(135680, i24.RouterPreloader, i24.RouterPreloader, [i24.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i24.PreloadingStrategy]), i0.ɵmpd(4608, i24.PreloadAllModules, i24.PreloadAllModules, []), i0.ɵmpd(4608, i12.ViewportScroller, i12.ɵNullViewportScroller, []), i0.ɵmpd(5120, i24.ɵangular_packages_router_router_n, i24.ɵangular_packages_router_router_c, [i24.Router, i12.ViewportScroller, i24.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i24.ROUTER_INITIALIZER, i24.ɵangular_packages_router_router_j, [i24.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i24.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i25.AnimationBuilder, i16.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i13.DOCUMENT]), i0.ɵmpd(4608, i13.TransferState, i13.TransferState, []), i0.ɵmpd(5120, i14.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i14.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i13.DOCUMENT, i0.APP_ID, i13.TransferState]), i0.ɵmpd(1073742336, i12.CommonModule, i12.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i13.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i24.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(256, i0.APP_ID, "app-root", []), i0.ɵmpd(2048, i13.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i24.ɵangular_packages_router_router_h, i24.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p1_1, p1_2, p2_0, p3_0, p3_1, p3_2) { return [i13.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i13.ɵangular_packages_platform_browser_platform_browser_h(p1_0, p1_1, p1_2), i24.ɵangular_packages_router_router_i(p2_0), i13.ɵangular_packages_platform_browser_platform_browser_h(p3_0, p3_1, p3_2)]; }, [[2, i0.NgProbeToken], i13.ɵTRANSITION_ID, i12.DOCUMENT, i0.Injector, i24.ɵangular_packages_router_router_h, i13.ɵTRANSITION_ID, i12.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i13.BrowserModule, i13.BrowserModule, [[3, i13.BrowserModule]]), i0.ɵmpd(1073742336, i17.NgtUniversalModule, i17.NgtUniversalModule, []), i0.ɵmpd(1073742336, i18.ɵangular_packages_forms_forms_bb, i18.ɵangular_packages_forms_forms_bb, []), i0.ɵmpd(1073742336, i18.FormsModule, i18.FormsModule, []), i0.ɵmpd(1073742336, i19.HttpModule, i19.HttpModule, []), i0.ɵmpd(1073742336, i18.ReactiveFormsModule, i18.ReactiveFormsModule, []), i0.ɵmpd(1073742336, i20.HttpClientXsrfModule, i20.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i20.HttpClientModule, i20.HttpClientModule, []), i0.ɵmpd(1073742336, i26.AgmCoreModule, i26.AgmCoreModule, []), i0.ɵmpd(1024, i24.ɵangular_packages_router_router_a, i24.ɵangular_packages_router_router_e, [[3, i24.Router]]), i0.ɵmpd(512, i24.UrlSerializer, i24.DefaultUrlSerializer, []), i0.ɵmpd(512, i24.ChildrenOutletContexts, i24.ChildrenOutletContexts, []), i0.ɵmpd(256, i24.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i12.LocationStrategy, i24.ɵangular_packages_router_router_d, [i12.PlatformLocation, [2, i12.APP_BASE_HREF], i24.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i12.Location, i12.Location, [i12.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i27.ModuleMapNgFactoryLoader, [i0.Compiler, i27.MODULE_MAP]), i0.ɵmpd(1024, i24.ROUTES, function () { return [[{ path: "", component: i28.HomeComponent }, { path: "about", component: i29.AboutComponent }, { path: "product", component: i30.ProductComponent }, { path: "pricing", component: i31.PriceComponent }, { path: "contact", component: i32.ContactComponent }, { path: "mobile-app", component: i33.MobileComponent }, { path: "client", component: i34.ClientComponent }]]; }, []), i0.ɵmpd(1024, i24.Router, i24.ɵangular_packages_router_router_f, [i0.ApplicationRef, i24.UrlSerializer, i24.ChildrenOutletContexts, i12.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i24.ROUTES, i24.ROUTER_CONFIGURATION, [2, i24.UrlHandlingStrategy], [2, i24.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i24.RouterModule, i24.RouterModule, [[2, i24.ɵangular_packages_router_router_a], [2, i24.Router]]), i0.ɵmpd(1073742336, i35.AppModule, i35.AppModule, []), i0.ɵmpd(1073742336, i16.NoopAnimationsModule, i16.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i14.ServerModule, i14.ServerModule, []), i0.ɵmpd(1073742336, i27.ModuleMapLoaderModule, i27.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i14.ServerTransferStateModule, i14.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i20.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i20.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i23.LAZY_MAPS_API_CONFIG, { apiKey: "AIzaSyA62jKlrVz3IA3aKnZvZhuZ-wAo3ukXnKs" }, []), i0.ɵmpd(256, i16.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/client/client.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/client/client.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./client.component.scss.shim.ngstyle */ "./src/app/client/client.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./client.component */ "./src/app/client/client.component.ts");
var styles_ClientComponent = [i0.styles];
var RenderType_ClientComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ClientComponent, data: {} });
exports.RenderType_ClientComponent = RenderType_ClientComponent;
function View_ClientComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "head", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-Saraswati School Management Software | Our Clients"])), (_l()(), i1.ɵeld(3, 0, null, null, 0, "meta", [["content", "E-Saraswati is a web & mobile based school management software trusted by our valuable clients. Visit us now!"], ["name", "description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "meta", [["content", "School ERP Clients, School Management Software Clients"], ["name", "keywords"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "meta", [["content", "!"], ["name", "fragment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "link", [["href", "http://e-saraswati.org/client"], ["rel", "canonical"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 59, "div", [["class", "client_content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 58, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 9, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Our Clients"])), (_l()(), i1.ɵeld(14, 0, null, null, 2, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-Saraswati is an advanced school ERP trusted by a vast array of schools. Our clients are the reason of our success. It is our primary goal to provide our clients with the resources and support that they need. From play schools, primary schools, high schools to higher secondary schools, E-Saraswati software has helped them to manage their school management activities efficiently."])), (_l()(), i1.ɵeld(17, 0, null, null, 2, "div", [["class", "sub-heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Here are some of our clients we've worked with over the years"])), (_l()(), i1.ɵeld(20, 0, null, null, 6, "div", [["class", "bg-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 5, "div", [["class", "row client_logo-row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 2, "div", [["class", "col-md-8 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "h3", [["class", "client_name  in-middle"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["St. Antony\u2019s School"])), (_l()(), i1.ɵeld(25, 0, null, null, 1, "div", [["class", "col-md-4 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 0, "img", [["class", "customers_logo"], ["src", "assets/images/client6.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 6, "div", [["class", "bg-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 5, "div", [["class", "row client_logo-row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "div", [["class", "col-md-3 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 0, "img", [["class", "customers_logo1"], ["src", "assets/images/client3.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 2, "div", [["class", "col-md-9 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "h3", [["class", "client_name in-middle"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["My Kinderland Public School"])), (_l()(), i1.ɵeld(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 6, "div", [["class", "bg-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 5, "div", [["class", "row client_logo-row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 2, "div", [["class", "col-md-8 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "h3", [["class", "client_name in-middle"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Noble Bright School"])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "div", [["class", "col-md-4 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 0, "img", [["class", "customers_logo1"], ["src", "assets/images/noble-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 6, "div", [["class", "bg-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 5, "div", [["class", "row client_logo-row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 1, "div", [["class", "col-md-3 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 0, "img", [["class", "customers_logo1"], ["src", "assets/images/client5.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 2, "div", [["class", "col-md-9 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 1, "h3", [["class", "client_name in-middle"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Golden Valley International School "])), (_l()(), i1.ɵeld(51, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 6, "div", [["class", "bg-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 5, "div", [["class", "row client_logo-row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 2, "div", [["class", "col-md-8 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 1, "h3", [["class", "client_name in-middle"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Bal Vihar School"])), (_l()(), i1.ɵeld(57, 0, null, null, 1, "div", [["class", "col-md-4 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 0, "img", [["class", "customers_logo"], ["src", "assets/images/client1.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 6, "div", [["class", "bg-light"]], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 5, "div", [["class", "row client_logo-row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 1, "div", [["class", "col-md-3 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 0, "img", [["class", "customers_logo1"], ["src", "assets/images/client4.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 2, "div", [["class", "col-md-9 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 1, "h3", [["class", "client_name in-middle"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Shree Maya Public School"]))], null, null); }
exports.View_ClientComponent_0 = View_ClientComponent_0;
function View_ClientComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-client", [], null, null, null, View_ClientComponent_0, RenderType_ClientComponent)), i1.ɵdid(1, 114688, null, 0, i2.ClientComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ClientComponent_Host_0 = View_ClientComponent_Host_0;
var ClientComponentNgFactory = i1.ɵccf("app-client", i2.ClientComponent, View_ClientComponent_Host_0, {}, {}, []);
exports.ClientComponentNgFactory = ClientComponentNgFactory;


/***/ }),

/***/ "./src/app/client/client.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/client/client.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".client_content[_ngcontent-%COMP%] {\n  font-family: myFirstFont;\n  padding: 40px 0 50px 0;\n  background: #fff; }\n\n.heading_line[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  text-align: center;\n   }\n\n.heading_line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fa7606;\n    font-size: 30px;\n    margin-bottom: 1rem; }\n\n.para_line[_ngcontent-%COMP%] {\n  font-size: 18px; }\n\n.sub-heading_line[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 20px; }\n\n.sub-heading_line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #fa7606;\n    font-size: 24px;\n    margin-bottom: 1rem; }\n\n.customers_logo[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto; }\n\n.customers_logo1[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto; }\n\n.element[_ngcontent-%COMP%]::after {\n  display: block;\n  content: \"\";\n  clear: both; }\n\n.client_logo-row[_ngcontent-%COMP%] {\n  padding: 10px; }\n\n.client_name[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 1rem; }\n\n.in-middle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n          transform: translateY(-50%) translateX(-50%); }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;


/***/ }),

/***/ "./src/app/contact/contact.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/contact/contact.component.ngfactory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./contact.component.scss.shim.ngstyle */ "./src/app/contact/contact.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i4 = __webpack_require__(/*! ../../../node_modules/@agm/core/directives/map.ngfactory */ "./node_modules/@agm/core/directives/map.ngfactory.js");
var i5 = __webpack_require__(/*! @agm/core/services/managers/info-window-manager */ "@agm/core/services/managers/info-window-manager");
var i6 = __webpack_require__(/*! @agm/core/services/google-maps-api-wrapper */ "@agm/core/services/google-maps-api-wrapper");
var i7 = __webpack_require__(/*! @agm/core/services/managers/marker-manager */ "@agm/core/services/managers/marker-manager");
var i8 = __webpack_require__(/*! @agm/core/services/managers/circle-manager */ "@agm/core/services/managers/circle-manager");
var i9 = __webpack_require__(/*! @agm/core/services/managers/rectangle-manager */ "@agm/core/services/managers/rectangle-manager");
var i10 = __webpack_require__(/*! @agm/core/services/managers/polyline-manager */ "@agm/core/services/managers/polyline-manager");
var i11 = __webpack_require__(/*! @agm/core/services/managers/polygon-manager */ "@agm/core/services/managers/polygon-manager");
var i12 = __webpack_require__(/*! @agm/core/services/managers/kml-layer-manager */ "@agm/core/services/managers/kml-layer-manager");
var i13 = __webpack_require__(/*! @agm/core/services/managers/data-layer-manager */ "@agm/core/services/managers/data-layer-manager");
var i14 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i15 = __webpack_require__(/*! @agm/core/services/fit-bounds */ "@agm/core/services/fit-bounds");
var i16 = __webpack_require__(/*! @agm/core/directives/map */ "@agm/core/directives/map");
var i17 = __webpack_require__(/*! @agm/core/directives/marker */ "@agm/core/directives/marker");
var i18 = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
var i19 = __webpack_require__(/*! ./contact.service */ "./src/app/contact/contact.service.ts");
var styles_ContactComponent = [i0.styles];
var RenderType_ContactComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ContactComponent, data: {} });
exports.RenderType_ContactComponent = RenderType_ContactComponent;
function View_ContactComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name is required"]))], null, null); }
function View_ContactComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name must contain only letters."]))], null, null); }
function View_ContactComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_2)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_3)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f.name.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.f.name.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ContactComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email is required"]))], null, null); }
function View_ContactComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email must be a valid email address."]))], null, null); }
function View_ContactComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_5)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_6)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f.email.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.f.email.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ContactComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Number is required"]))], null, null); }
function View_ContactComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Number must be of 10 digits."]))], null, null); }
function View_ContactComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_8)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_9)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f.phone.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.f.phone.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ContactComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Message is required"]))], null, null); }
function View_ContactComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Message must be atleast 100 characters."]))], null, null); }
function View_ContactComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_11)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_12)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f.message.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.f.message.errors.minlength; _ck(_v, 4, 0, currVal_1); }, null); }
function View_ContactComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "head", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Web-Based School Information Management Software India | School ERP Demo Online | E-Saraswati"])), (_l()(), i1.ɵeld(3, 0, null, null, 0, "meta", [["content", "Get the right school information management software for your school in India. E-Saraswati is a web-based ERP system designed to automate your school's diverse operations. Try free demo!"], ["name", "description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "meta", [["content", "School Management Software Demo Online, School ERP Software Demo, School Management System Live Demo, School Management System Demo Online, School ERP Software Online Demo, Web Based School Management Software, School Information Management Software In India"], ["name", "keywords"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "meta", [["content", "!"], ["name", "fragment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "link", [["href", "http://e-saraswati.org/contact"], ["rel", "canonical"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 126, "div", [["class", "contact_content"], ["id", "contact_pge"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 125, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 124, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 123, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Feel Free to Contact Us"])), (_l()(), i1.ɵeld(14, 0, null, null, 24, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 7, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 6, "div", [["class", "media p-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 0, "i", [["class", "fa fa-phone"], ["style", "font-size:45px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 4, "div", [["class", "media-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(19, 0, null, null, 1, "p", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Call Us"])), (_l()(), i1.ɵeld(21, 0, null, null, 1, "p", [["class", "sub_con"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["+91-9131708587"])), (_l()(), i1.ɵeld(23, 0, null, null, 7, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 6, "div", [["class", "media p-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 0, "i", [["class", "fa fa-support"], ["style", "font-size:45px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 4, "div", [["class", "media-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(27, 0, null, null, 1, "p", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Support"])), (_l()(), i1.ɵeld(29, 0, null, null, 1, "p", [["class", "sub_con"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["+91-731 2427076"])), (_l()(), i1.ɵeld(31, 0, null, null, 7, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 6, "div", [["class", "media p-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 0, "i", [["class", "fa fa-envelope-o"], ["style", "font-size:45px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 4, "div", [["class", "media-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "p", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Have Any Queries?"])), (_l()(), i1.ɵeld(37, 0, null, null, 1, "p", [["class", "sub_con"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["info@ripplesinfomatics.com"])), (_l()(), i1.ɵeld(39, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 71, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 4, "div", [["class", "col-sm-4 message-form"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "p", [["class", "message_para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Leave Us A Message"])), (_l()(), i1.ɵeld(44, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["We would love to hear from you. If you got any questions regarding our online school management ERP software, please write to us."])), (_l()(), i1.ɵeld(46, 0, null, null, 65, "div", [["class", "col-sm-8 form-col"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 64, "form", [["method", "POST"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 49).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 49).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendMail(i1.ɵnov(_v, 55).value, i1.ɵnov(_v, 70).value, i1.ɵnov(_v, 85).value, i1.ɵnov(_v, 100).value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(48, 16384, null, 0, i3.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(49, 540672, null, 0, i3.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.FormGroupDirective]), i1.ɵdid(51, 16384, null, 0, i3.NgControlStatusGroup, [[4, i3.ControlContainer]], null, null), (_l()(), i1.ɵeld(52, 0, null, null, 14, "fieldset", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 1, "label", [["class", "bmd-label-floating"], ["for", "exampleInputName"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name"])), (_l()(), i1.ɵeld(55, 0, [["name", 1]], null, 9, "input", [["class", "form-control contact_form"], ["formControlName", "name"], ["pattern", "[a-zA-Z ]*"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 58)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 58).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 58)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 58)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(56, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(57, { "is-invalid": 0 }), i1.ɵdid(58, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(59, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(62, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(64, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_1)), i1.ɵdid(66, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(67, 0, null, null, 14, "fieldset", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(68, 0, null, null, 1, "label", [["class", "bmd-label-floating"], ["for", "exampleInputEmail"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email"])), (_l()(), i1.ɵeld(70, 0, [["email", 1]], null, 9, "input", [["class", "form-control contact_form"], ["formControlName", "email"], ["pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"], ["type", "email"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 73)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 73).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 73)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 73)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(71, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(72, { "is-invalid": 0 }), i1.ɵdid(73, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(74, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(77, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(79, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_4)), i1.ɵdid(81, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(82, 0, null, null, 14, "fieldset", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 1, "label", [["class", "bmd-label-floating"], ["for", "exampleInputContact"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact"])), (_l()(), i1.ɵeld(85, 0, [["phone", 1]], null, 9, "input", [["class", "form-control contact_form"], ["formControlName", "phone"], ["pattern", "^((\\\\+91-?)|0)?[0-9]{10}$"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 88)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 88).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 88)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 88)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(86, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(87, { "is-invalid": 0 }), i1.ɵdid(88, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(89, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(92, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(94, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_7)), i1.ɵdid(96, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(97, 0, null, null, 12, "fieldset", [["class", "form-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(98, 0, null, null, 1, "label", [["class", "bmd-label-floating"], ["for", "exampleInputMessage"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Message"])), (_l()(), i1.ɵeld(100, 0, [["message", 1]], null, 7, "textarea", [["class", "form-control contact_form"], ["formControlName", "message"], ["rows", "3"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 103)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 103).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 103)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 103)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(101, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(102, { "is-invalid": 0 }), i1.ɵdid(103, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(105, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(107, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_ContactComponent_10)), i1.ɵdid(109, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(110, 0, null, null, 1, "button", [["class", "btn submit_form"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SUBMIT"])), (_l()(), i1.ɵeld(112, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(113, 0, null, null, 20, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(114, 0, null, null, 2, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(115, 0, null, null, 1, "p", [["class", "message_para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You Can Find Us At"])), (_l()(), i1.ɵeld(117, 0, null, null, 16, "div", [["class", "col-md-8 map_colmn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(118, 0, null, null, 15, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, i4.View_AgmMap_0, i4.RenderType_AgmMap)), i1.ɵprd(4608, null, i5.InfoWindowManager, i5.InfoWindowManager, [i6.GoogleMapsAPIWrapper, i1.NgZone, i7.MarkerManager]), i1.ɵprd(4608, null, i8.CircleManager, i8.CircleManager, [i6.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i9.RectangleManager, i9.RectangleManager, [i6.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i10.PolylineManager, i10.PolylineManager, [i6.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i11.PolygonManager, i11.PolygonManager, [i6.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i12.KmlLayerManager, i12.KmlLayerManager, [i6.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i13.DataLayerManager, i13.DataLayerManager, [i6.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(512, null, i6.GoogleMapsAPIWrapper, i6.GoogleMapsAPIWrapper, [i14.MapsAPILoader, i1.NgZone]), i1.ɵprd(512, null, i15.FitBoundsService, i15.FitBoundsService, [i14.MapsAPILoader]), i1.ɵdid(128, 770048, null, 0, i16.AgmMap, [i1.ElementRef, i6.GoogleMapsAPIWrapper, i15.FitBoundsService], { longitude: [0, "longitude"], latitude: [1, "latitude"], zoom: [2, "zoom"] }, null), i1.ɵprd(512, null, i7.MarkerManager, i7.MarkerManager, [i6.GoogleMapsAPIWrapper, i1.NgZone]), (_l()(), i1.ɵeld(130, 0, null, 0, 3, "agm-marker", [], null, null, null, null, null)), i1.ɵprd(6144, null, i15.FitBoundsAccessor, null, [i17.AgmMarker]), i1.ɵdid(132, 1720320, null, 1, i17.AgmMarker, [i7.MarkerManager], { latitude: [0, "latitude"], longitude: [1, "longitude"] }, null), i1.ɵqud(603979776, 1, { infoWindow: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.angForm; _ck(_v, 49, 0, currVal_7); var currVal_16 = "form-control contact_form"; var currVal_17 = _ck(_v, 57, 0, (_co.submitted && _co.f.name.errors)); _ck(_v, 56, 0, currVal_16, currVal_17); var currVal_18 = "[a-zA-Z ]*"; _ck(_v, 59, 0, currVal_18); var currVal_19 = "name"; _ck(_v, 62, 0, currVal_19); var currVal_20 = (_co.submitted && _co.f.name.errors); _ck(_v, 66, 0, currVal_20); var currVal_29 = "form-control contact_form"; var currVal_30 = _ck(_v, 72, 0, (_co.submitted && _co.f.email.errors)); _ck(_v, 71, 0, currVal_29, currVal_30); var currVal_31 = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; _ck(_v, 74, 0, currVal_31); var currVal_32 = "email"; _ck(_v, 77, 0, currVal_32); var currVal_33 = (_co.submitted && _co.f.email.errors); _ck(_v, 81, 0, currVal_33); var currVal_42 = "form-control contact_form"; var currVal_43 = _ck(_v, 87, 0, (_co.submitted && _co.f.phone.errors)); _ck(_v, 86, 0, currVal_42, currVal_43); var currVal_44 = "^((\\\\+91-?)|0)?[0-9]{10}$"; _ck(_v, 89, 0, currVal_44); var currVal_45 = "phone"; _ck(_v, 92, 0, currVal_45); var currVal_46 = (_co.submitted && _co.f.phone.errors); _ck(_v, 96, 0, currVal_46); var currVal_54 = "form-control contact_form"; var currVal_55 = _ck(_v, 102, 0, (_co.submitted && _co.f.message.errors)); _ck(_v, 101, 0, currVal_54, currVal_55); var currVal_56 = "message"; _ck(_v, 105, 0, currVal_56); var currVal_57 = (_co.submitted && _co.f.message.errors); _ck(_v, 109, 0, currVal_57); var currVal_59 = _co.lng; var currVal_60 = _co.lat; var currVal_61 = 15; _ck(_v, 128, 0, currVal_59, currVal_60, currVal_61); var currVal_62 = _co.lat; var currVal_63 = _co.lng; _ck(_v, 132, 0, currVal_62, currVal_63); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 51).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 51).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 51).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 51).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 51).ngClassValid; var currVal_5 = i1.ɵnov(_v, 51).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 51).ngClassPending; _ck(_v, 47, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = (i1.ɵnov(_v, 59).pattern ? i1.ɵnov(_v, 59).pattern : null); var currVal_9 = i1.ɵnov(_v, 64).ngClassUntouched; var currVal_10 = i1.ɵnov(_v, 64).ngClassTouched; var currVal_11 = i1.ɵnov(_v, 64).ngClassPristine; var currVal_12 = i1.ɵnov(_v, 64).ngClassDirty; var currVal_13 = i1.ɵnov(_v, 64).ngClassValid; var currVal_14 = i1.ɵnov(_v, 64).ngClassInvalid; var currVal_15 = i1.ɵnov(_v, 64).ngClassPending; _ck(_v, 55, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_21 = (i1.ɵnov(_v, 74).pattern ? i1.ɵnov(_v, 74).pattern : null); var currVal_22 = i1.ɵnov(_v, 79).ngClassUntouched; var currVal_23 = i1.ɵnov(_v, 79).ngClassTouched; var currVal_24 = i1.ɵnov(_v, 79).ngClassPristine; var currVal_25 = i1.ɵnov(_v, 79).ngClassDirty; var currVal_26 = i1.ɵnov(_v, 79).ngClassValid; var currVal_27 = i1.ɵnov(_v, 79).ngClassInvalid; var currVal_28 = i1.ɵnov(_v, 79).ngClassPending; _ck(_v, 70, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_34 = (i1.ɵnov(_v, 89).pattern ? i1.ɵnov(_v, 89).pattern : null); var currVal_35 = i1.ɵnov(_v, 94).ngClassUntouched; var currVal_36 = i1.ɵnov(_v, 94).ngClassTouched; var currVal_37 = i1.ɵnov(_v, 94).ngClassPristine; var currVal_38 = i1.ɵnov(_v, 94).ngClassDirty; var currVal_39 = i1.ɵnov(_v, 94).ngClassValid; var currVal_40 = i1.ɵnov(_v, 94).ngClassInvalid; var currVal_41 = i1.ɵnov(_v, 94).ngClassPending; _ck(_v, 85, 0, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_47 = i1.ɵnov(_v, 107).ngClassUntouched; var currVal_48 = i1.ɵnov(_v, 107).ngClassTouched; var currVal_49 = i1.ɵnov(_v, 107).ngClassPristine; var currVal_50 = i1.ɵnov(_v, 107).ngClassDirty; var currVal_51 = i1.ɵnov(_v, 107).ngClassValid; var currVal_52 = i1.ɵnov(_v, 107).ngClassInvalid; var currVal_53 = i1.ɵnov(_v, 107).ngClassPending; _ck(_v, 100, 0, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53); var currVal_58 = true; _ck(_v, 118, 0, currVal_58); }); }
exports.View_ContactComponent_0 = View_ContactComponent_0;
function View_ContactComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), i1.ɵdid(1, 114688, null, 0, i18.ContactComponent, [i3.FormBuilder, i19.ContactService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ContactComponent_Host_0 = View_ContactComponent_Host_0;
var ContactComponentNgFactory = i1.ɵccf("app-contact", i18.ContactComponent, View_ContactComponent_Host_0, {}, {}, []);
exports.ContactComponentNgFactory = ContactComponentNgFactory;


/***/ }),

/***/ "./src/app/contact/contact.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".contact_content[_ngcontent-%COMP%] {\n  font-family: myFirstFont;\n  padding: 40px 0 40px 0;\n  background: #fff; }\n\n.heading_line[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  text-align: center;\n   }\n\n.heading_line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fa7606;\n    font-size: 30px;\n    margin-bottom: 1rem; }\n\n.para_line[_ngcontent-%COMP%] {\n  font-size: 18px; }\n\n.sub-heading_line[_ngcontent-%COMP%] {\n  font-size: 22px;\n  text-align: center; }\n\n.media-body[_ngcontent-%COMP%] {\n  padding-left: 20px; }\n\n.para_line[_ngcontent-%COMP%] {\n  margin-bottom: 0rem; }\n\n.sub_con[_ngcontent-%COMP%] {\n  font-size: 22px; }\n\n.contact_form[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important; }\n\n.message_para[_ngcontent-%COMP%] {\n  font-size: 22px; }\n\n.submit_form[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);\n  color: #fff;\n  border-radius: 5px; }\n\n.bmd-label-floating[_ngcontent-%COMP%] {\n  color: #000; }\n\nagm-map[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 100%; }\n\n.map_colmn[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 0; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var contact_service_1 = __webpack_require__(/*! ./contact.service */ "./src/app/contact/contact.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, contactService) {
        this.fb = fb;
        this.contactService = contactService;
        this.lat = 22.7496;
        this.lng = 75.8955;
        this.submitted = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.angForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required]],
            phone: ['', [forms_1.Validators.required]],
            message: ['', [forms_1.Validators.required, forms_1.Validators.minLength(100)]]
        });
    };
    Object.defineProperty(ContactComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            //console.log(this.angForm.controls);
            return this.angForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.sendMail = function (name, email, phone, message) {
        this.submitted = true;
        if (this.angForm.valid) {
            this.contactService.sendEmail(name, email, phone, message).subscribe(function (success) {
                console.log('Your data is succesfully submitted');
                console.log(success);
            }, function (error) {
                console.log('Something went wrong');
            });
            alert('SUCCESS!! :-)');
            location.reload();
        }
        else {
            return;
        }
    };
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var http_2 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var httpOptions = {
    headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' })
};
var apiUrl = 'contact';
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.sendEmailUrl = '/send';
    }
    ContactService.prototype.sendEmail = function (name, email, phone, message) {
        var uri = "" + (apiUrl + this.sendEmailUrl);
        var obj = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };
        return this.http.post(uri, obj);
    };
    ContactService.ngInjectableDef = i0.defineInjectable({ factory: function ContactService_Factory() { return new ContactService(i0.inject(i1.Http)); }, token: ContactService, providedIn: "root" });
    return ContactService;
}());
exports.ContactService = ContactService;


/***/ }),

/***/ "./src/app/demo.service.ts":
/*!*********************************!*\
  !*** ./src/app/demo.service.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var http_2 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var httpOptions = {
    headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' })
};
var apiUrl = '';
var DemoService = /** @class */ (function () {
    function DemoService(http) {
        this.http = http;
        this.sendEmailUrl = '/send_email';
    }
    DemoService.prototype.sendEmail = function (email1) {
        var uri = "" + (apiUrl + this.sendEmailUrl);
        var obj = {
            email1: email1,
        };
        return this.http.post(uri, obj);
    };
    DemoService.ngInjectableDef = i0.defineInjectable({ factory: function DemoService_Factory() { return new DemoService(i0.inject(i1.Http)); }, token: DemoService, providedIn: "root" });
    return DemoService;
}());
exports.DemoService = DemoService;


/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/home/home.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i3 = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "head", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School Management Software India | Online School Administration System | E-Saraswati"])), (_l()(), i1.ɵeld(3, 0, null, null, 0, "meta", [["content", "Automate your school administration with E-Saraswati School Management Software. Our online school management system includes a wide array of features to help manage your school processes efficiently. Visit now!"], ["name", "description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "meta", [["content", "School Management Software, School Management Software India, School Management System India, School Administration Management System, School Administration Management Software, School Administration Software, School Management Software In India, Online School Management Software, E-Saraswati"], ["name", "keywords"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "meta", [["content", "!"], ["name", "fragment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "link", [["href", "http://e-saraswati.org/"], ["rel", "canonical"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 184, "div", [["class", "page_content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 183, "div", [["class", "home-page"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 4, "div", [["class", "container-fluid home-img"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 3, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "row "]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "div", [["class", "col-md-12 text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 0, "img", [["alt", "school management software India"], ["class", "main_screen"], ["src", "assets/images/all-screen.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 115, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 53, "div", [["class", "row home_sections"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 2, "div", [["class", "col-md-12"], ["style", "padding-bottom:15px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "h3", [["class", "main_heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Industrialize Management, Produce insightful reports, Make better & faster decisions."])), (_l()(), i1.ɵeld(19, 0, null, null, 24, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 7, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 6, "div", [["data-aos", "fade-up"], ["data-aos-duration", "400"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 4, "div", [["class", "card-body snip1573"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 0, "img", [["alt", "school transport management software India"], ["src", "assets/images/bus_new.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TRANSPORT"])), (_l()(), i1.ɵeld(28, 0, null, null, 7, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 6, "div", [["data-aos", "fade-up"], ["data-aos-duration", "500"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 4, "div", [["class", "card-body snip1573"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 0, "img", [["alt", "school message alerts"], ["src", "assets/images/messaging1_new.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["MESSAGES"])), (_l()(), i1.ɵeld(36, 0, null, null, 7, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 6, "div", [["data-aos", "fade-up"], ["data-aos-duration", "600"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 4, "div", [["class", "card-body snip1573"]], null, null, null, null, null)), (_l()(), i1.ɵeld(40, 0, null, null, 0, "img", [["alt", "school exams notification"], ["src", "assets/images/exam_new.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["EXAM"])), (_l()(), i1.ɵeld(44, 0, null, null, 24, "div", [["class", "row"], ["style", "padding-top:20px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 7, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 6, "div", [["data-aos", "fade-up"], ["data-aos-duration", "700"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 4, "div", [["class", "card-body snip1573"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 0, "img", [["alt", "school fees management software India"], ["src", "assets/images/fees_new.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["FEES"])), (_l()(), i1.ɵeld(53, 0, null, null, 7, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 6, "div", [["data-aos", "fade-up"], ["data-aos-duration", "800"]], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 4, "div", [["class", "card-body snip1573"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 0, "img", [["alt", "school library management software India"], ["src", "assets/images/library_new.jpeg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["LIBRARY"])), (_l()(), i1.ɵeld(61, 0, null, null, 7, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 6, "div", [["data-aos", "fade-up"], ["data-aos-duration", "900"]], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 5, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 4, "div", [["class", "card-body snip1573"]], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 0, "img", [["alt", "school payroll management software india"], ["src", "assets/images/payroll_new.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(67, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["PAYROLL"])), (_l()(), i1.ɵeld(69, 0, null, null, 42, "div", [["class", "row home_sections"]], null, null, null, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 2, "div", [["class", "col-md-12"], ["style", "padding-bottom:15px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 1, "h1", [["class", "main_heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Why Choose E-Saraswati As Your School Management System?"])), (_l()(), i1.ɵeld(73, 0, null, null, 38, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 37, "div", [["data-aos", "fade-up"], ["data-aos-duration", "1000"]], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 36, "div", [["class", "photobox photobox_type1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 35, "div", [["class", "photobox__previewbox"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 0, "img", [["alt", "E-Saraswati school management system"], ["class", "photobox__preview"], ["src", "assets/images/computer.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 33, "span", [["class", "photobox__label"]], null, null, null, null, null)), (_l()(), i1.ɵeld(79, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Betterment Of Your Educational Institution"])), (_l()(), i1.ɵeld(81, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" Make your school administration better with E-Saraswati school management system in India. The benefits of using our online school management system include well-organized information management, stress-free, and quicker communication, information tracking and transparency and optimum use of time are the key benefits of using school management software. "])), (_l()(), i1.ɵeld(84, 0, null, null, 0, "hr", [["style", "border-top: 1px solid #fff;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 26, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(86, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0Dashing Dashboard "])), (_l()(), i1.ɵeld(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A024*7 Accessibility "])), (_l()(), i1.ɵeld(91, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(92, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0Easy to Use "])), (_l()(), i1.ɵeld(94, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(95, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0Well-Structured Modules "])), (_l()(), i1.ɵeld(97, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(98, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0Multi-User Access "])), (_l()(), i1.ɵeld(100, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(101, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0Customizable "])), (_l()(), i1.ɵeld(103, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(104, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0Secure "])), (_l()(), i1.ɵeld(106, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(107, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0Fully Colorized "])), (_l()(), i1.ɵeld(109, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(110, 0, null, null, 0, "i", [["class", "fa fa-check"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0Mobile Application "])), (_l()(), i1.ɵeld(112, 0, null, null, 17, "div", [["class", "row home_sections"]], null, null, null, null, null)), (_l()(), i1.ɵeld(113, 0, null, null, 2, "div", [["class", "col-md-12"], ["style", "padding-bottom:15px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(114, 0, null, null, 1, "h2", [["class", "main_heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Features and Benefits of E-SARASWATI ERP Software Solution"])), (_l()(), i1.ɵeld(116, 0, null, null, 13, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(117, 0, null, null, 10, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(118, 0, null, null, 9, "div", [["data-aos", "fade-up"], ["data-aos-duration", "1000"]], null, null, null, null, null)), (_l()(), i1.ɵeld(119, 0, null, null, 8, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵeld(120, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Fastest and Easiest Implementation of any ERP and Personalized, Role-Based Access."])), (_l()(), i1.ɵeld(122, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Best ROI of Any ERP, Zero Maintenance, Reduced Costs / paper work and Easy GUI."])), (_l()(), i1.ɵeld(124, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Reduction in manual work upto 99% ,Transparency between parents, teachers & Admin ,Real time SMS System(Attendance, Home Work, Circular, Fees Reminders) and Global Access & Easy to use web based module."])), (_l()(), i1.ɵeld(126, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["As a web and mobile-based application, it connects students, staff, and parents seamlessly to manage school operations efficiently."])), (_l()(), i1.ɵeld(128, 0, null, null, 1, "div", [["class", "col-md-6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(129, 0, null, null, 0, "img", [["alt", "E-Saraswati school erp software"], ["class", "main_screen"], ["src", "assets/images/screen3.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(130, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(131, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(132, 0, null, null, 24, "div", [["class", "container-fluid mobile_sec"]], null, null, null, null, null)), (_l()(), i1.ɵeld(133, 0, null, null, 23, "div", [["class", "container mobile_phone"]], null, null, null, null, null)), (_l()(), i1.ɵeld(134, 0, null, null, 22, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(135, 0, null, null, 0, "div", [["class", "col-md-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(136, 0, null, null, 3, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(137, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(138, 0, null, null, 1, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(139, 0, null, null, 0, "img", [["class", "main_screen-1"], ["src", "assets/images/phone-app.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(140, 0, null, null, 15, "div", [["class", "col-md-7 mobile_col"]], null, null, null, null, null)), (_l()(), i1.ɵeld(141, 0, null, null, 14, "div", [["class", "in-middle"]], null, null, null, null, null)), (_l()(), i1.ɵeld(142, 0, null, null, 10, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(143, 0, null, null, 1, "span", [["class", "head-span"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-Saraswati - Feature Rich Mobile Application"])), (_l()(), i1.ɵeld(145, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(146, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(147, 0, null, null, 1, "span", [["class", "sub-head-span"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Take your school management process to cloud 9 with E-Saraswati Mobile App"])), (_l()(), i1.ɵeld(149, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(150, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(151, 0, null, null, 1, "span", [["class", "para-span"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enjoy the benefits of our feature-rich smartphone application that aims to manage all your school information efficiently. E-Saraswati is a customized school management app with a login for Student, Parent, Teacher, and Management, giving real-time information for most recent happening at the school."])), (_l()(), i1.ɵeld(153, 0, null, null, 2, "button", [["class", "btn btn-lg waves-effect"], ["routerLink", "mobile-app"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 154).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(154, 16384, null, 0, i2.RouterLink, [i2.Router, i2.ActivatedRoute, [8, null], i1.Renderer2, i1.ElementRef], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Explore School App Features"])), (_l()(), i1.ɵeld(156, 0, null, null, 0, "div", [["class", "col-md-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(157, 0, null, null, 34, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(158, 0, null, null, 33, "div", [["class", "row home_sections"]], null, null, null, null, null)), (_l()(), i1.ɵeld(159, 0, null, null, 2, "div", [["class", "col-md-12"], ["style", "padding-bottom:15px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(160, 0, null, null, 1, "h6", [["class", "main_heading"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Our Most Valuable Clients"])), (_l()(), i1.ɵeld(162, 0, null, null, 29, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(163, 0, null, null, 28, "div", [["class", "carousel slide carousel-multi-item text-center"], ["data-ride", "carousel"], ["id", "carousel-with-lb"]], null, null, null, null, null)), (_l()(), i1.ɵeld(164, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(165, 0, null, null, 5, "div", [["class", "controls-top"]], null, null, null, null, null)), (_l()(), i1.ɵeld(166, 0, null, null, 1, "a", [["class", "btn-floating btn-secondary control_btns"], ["data-slide", "prev"], ["href", "#carousel-with-lb"]], null, null, null, null, null)), (_l()(), i1.ɵeld(167, 0, null, null, 0, "i", [["class", "fa fa-chevron-left"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" \u00A0\u00A0\u00A0\u00A0 "])), (_l()(), i1.ɵeld(169, 0, null, null, 1, "a", [["class", "btn-floating btn-secondary control_btns"], ["data-slide", "next"], ["href", "#carousel-with-lb"]], null, null, null, null, null)), (_l()(), i1.ɵeld(170, 0, null, null, 0, "i", [["class", "fa fa-chevron-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(171, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(172, 0, null, null, 2, "ol", [["class", "carousel-indicators"]], null, null, null, null, null)), (_l()(), i1.ɵeld(173, 0, null, null, 0, "li", [["class", "active secondary-color"], ["data-slide-to", "0"], ["data-target", "#carousel-with-lb"]], null, null, null, null, null)), (_l()(), i1.ɵeld(174, 0, null, null, 0, "li", [["class", "secondary-color"], ["data-slide-to", "1"], ["data-target", "#carousel-with-lb"]], null, null, null, null, null)), (_l()(), i1.ɵeld(175, 0, null, null, 15, "div", [["class", "carousel-inner mdb-lightbox"], ["role", "listbox"]], null, null, null, null, null)), (_l()(), i1.ɵeld(176, 0, null, null, 0, "div", [["id", "mdb-lightbox-ui"]], null, null, null, null, null)), (_l()(), i1.ɵeld(177, 0, null, null, 6, "div", [["class", "carousel-item active text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(178, 0, null, null, 1, "figure", [["class", "col-md-4 d-md-inline-block"]], null, null, null, null, null)), (_l()(), i1.ɵeld(179, 0, null, null, 0, "img", [["class", "img-fluid customers_logo"], ["src", "assets/images/noble-logo.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(180, 0, null, null, 1, "figure", [["class", "col-md-4 d-md-inline-block"]], null, null, null, null, null)), (_l()(), i1.ɵeld(181, 0, null, null, 0, "img", [["class", "img-fluid customers_logo"], ["src", "assets/images/client3.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(182, 0, null, null, 1, "figure", [["class", "col-md-4 d-md-inline-block"]], null, null, null, null, null)), (_l()(), i1.ɵeld(183, 0, null, null, 0, "img", [["class", "img-fluid customers_logo"], ["src", "assets/images/client5.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(184, 0, null, null, 6, "div", [["class", "carousel-item text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(185, 0, null, null, 1, "figure", [["class", "col-md-4 d-md-inline-block"]], null, null, null, null, null)), (_l()(), i1.ɵeld(186, 0, null, null, 0, "img", [["class", "img-fluid customers_logo"], ["src", "assets/images/client4.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(187, 0, null, null, 1, "figure", [["class", "col-md-4 d-md-inline-block"]], null, null, null, null, null)), (_l()(), i1.ɵeld(188, 0, null, null, 0, "img", [["class", "img-fluid main_screen"], ["src", "assets/images/client6.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(189, 0, null, null, 1, "figure", [["class", "col-md-4 d-md-inline-block"]], null, null, null, null, null)), (_l()(), i1.ɵeld(190, 0, null, null, 0, "img", [["class", "img-fluid main_screen"], ["src", "assets/images/client1.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(191, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "mobile-app"; _ck(_v, 154, 0, currVal_0); }, null); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(1, 114688, null, 0, i3.HomeComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i1.ɵccf("app-home", i3.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/home/home.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/home/home.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".page_content[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  background: #83a4d4;\n  background: linear-gradient(to left, #b6fbff, #83a4d4); }\n\n.home-page[_ngcontent-%COMP%] {\n  padding: 40px 0 40px 0; }\n\n.main_screen[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto; }\n\n.main_screen-1[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto; }\n\n.home-img[_ngcontent-%COMP%] {\n  height: 100%;\n  max-height: 100%;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.main_heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 22px;\n  font-weight: 700;\n  padding-top: 10px; }\n\n.front_imgs[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.sm-img_col[_ngcontent-%COMP%] {\n  text-align: center; }\n\n.imgs_name[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-weight: 600; }\n\n.home_sections[_ngcontent-%COMP%] {\n  padding-top: 50px; }\n\n.customers_logo[_ngcontent-%COMP%] {\n  width: 55%;\n  margin: auto; }\n\n.control_btns[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 50%;\n  background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%); }\n\n.fa-chevron-left[_ngcontent-%COMP%], .fa-chevron-right[_ngcontent-%COMP%] {\n  padding: 5px; }\n\n.carousel-indicators[_ngcontent-%COMP%] {\n  bottom: 0px; }\n\n.secondary-color[_ngcontent-%COMP%] {\n  background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%); }\n\n\n\n.photobox__previewbox[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden; }\n\n.photobox__previewbox[_ngcontent-%COMP%]:before {\n    content: \"\"; }\n\n.photobox__preview[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  width: 100;\n  margin: auto;\n  border: 5px solid #000;\n  padding: 20px;\n  border-radius: 10px; }\n\n.photobox_type1[_ngcontent-%COMP%]   .photobox__previewbox[_ngcontent-%COMP%]:before {\n  width: 0;\n  height: 0;\n  padding: 25%;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--photoboxOverlay, rgba(0, 0, 0, 0.8));\n  transition: -webkit-transform calc(var(--photoboxAnimationDuration, .2s) / 2) ease calc(var(--photoboxAnimationDuration, .2s) / 2);\n  transition: transform calc(var(--photoboxAnimationDuration, .2s) / 2) ease calc(var(--photoboxAnimationDuration, .2s) / 2);\n  transition: transform calc(var(--photoboxAnimationDuration, .2s) / 2) ease calc(var(--photoboxAnimationDuration, .2s) / 2), -webkit-transform calc(var(--photoboxAnimationDuration, .2s) / 2) ease calc(var(--photoboxAnimationDuration, .2s) / 2);\n  will-change: transform;\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.photobox_type1[_ngcontent-%COMP%]:hover   .photobox__previewbox[_ngcontent-%COMP%]:before {\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  transition-duration: var(--photoboxAnimationDuration, 0.2s);\n  transition-delay: 0s; }\n\n.photobox_type1[_ngcontent-%COMP%]:hover   .photobox__label[_ngcontent-%COMP%] {\n  transition-duration: var(--photoboxAnimationDuration, 0.2s);\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%); }\n\n.photobox_type1[_ngcontent-%COMP%]   .photobox__label[_ngcontent-%COMP%] {\n  width: 60%;\n  -webkit-transform: translate(-200%, -50%);\n          transform: translate(-200%, -50%);\n  transition: -webkit-transform var(--photoboxAnimationDuration, 0.2s) ease-out;\n  transition: transform var(--photoboxAnimationDuration, 0.2s) ease-out;\n  transition: transform var(--photoboxAnimationDuration, 0.2s) ease-out, -webkit-transform var(--photoboxAnimationDuration, 0.2s) ease-out;\n  will-change: transform;\n  position: absolute;\n  top: 33%;\n  bottom: 33%;\n  left: 5%; }\n\n.photobox_type14[_ngcontent-%COMP%]   .photobox__previewbox[_ngcontent-%COMP%]:before {\n  width: 0;\n  height: 0;\n  padding: 45%;\n  background-color: var(--photoboxOverlay, rgba(0, 0, 0, 0.8));\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n  transition: -webkit-transform var(--photoboxAnimationDuration, 0.4s) ease calc(var(--photoboxAnimationDuration, .4s) / 2);\n  transition: transform var(--photoboxAnimationDuration, 0.4s) ease calc(var(--photoboxAnimationDuration, .4s) / 2);\n  transition: transform var(--photoboxAnimationDuration, 0.4s) ease calc(var(--photoboxAnimationDuration, .4s) / 2), -webkit-transform var(--photoboxAnimationDuration, 0.4s) ease calc(var(--photoboxAnimationDuration, .4s) / 2);\n  will-change: transform;\n  -webkit-transform: translate(-50%, -250%);\n          transform: translate(-50%, -250%); }\n\n.photobox_type14[_ngcontent-%COMP%]:hover   .photobox__previewbox[_ngcontent-%COMP%]:before {\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  transition-duration: var(--photoboxAnimationDuration, 0.4s);\n  transition-delay: 0s; }\n\n.photobox_type14[_ngcontent-%COMP%]:hover   .photobox__label[_ngcontent-%COMP%] {\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  transition-duration: calc(var(--photoboxAnimationDuration, .4s) / 2);\n  transition-delay: var(--photoboxAnimationDuration, 0.4s);\n  opacity: 1; }\n\n.photobox_type14[_ngcontent-%COMP%]:hover   .photobox__preview[_ngcontent-%COMP%] {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n.photobox_type14[_ngcontent-%COMP%]   .photobox__label[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n  opacity: 0;\n  transition: opacity var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9), -webkit-transform var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9);\n  transition: opacity var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9), transform var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9);\n  transition: opacity var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9), transform var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9), -webkit-transform var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9);\n  will-change: opacity, transform;\n  -webkit-transform: translate(-50%, -200%);\n          transform: translate(-50%, -200%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 3; }\n\n.photobox_type14[_ngcontent-%COMP%]   .photobox__preview[_ngcontent-%COMP%] {\n  transition: -webkit-transform var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9);\n  transition: transform var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9);\n  transition: transform var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9), -webkit-transform var(--photoboxAnimationDuration, 0.4s) cubic-bezier(0.71, 0.05, 0.29, 0.9);\n  will-change: transform;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.photobox[_ngcontent-%COMP%] {\n  color: #fff;\n  letter-spacing: 1px;\n  width: 100%;\n  --photoboxoverlay: rgba(72, 27, 174, .7); }\n\n.page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\n.page__demo[_ngcontent-%COMP%] {\n  flex-grow: 1; }\n\n.page__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start; }\n\n.main-container[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n.in-middle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0; }\n\n\n\n.snip1573[_ngcontent-%COMP%] {\n  background-color: #000;\n  display: inline-block;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  max-width: 100%;\n  min-width: 100%;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  width: 100%; }\n\n.snip1573[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    transition: all 0.35s ease; }\n\n.snip1573[_ngcontent-%COMP%]:before {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transition: all 0.35s ease;\n    background-color: #000000;\n    border-left: 3px solid #fff;\n    border-right: 3px solid #fff;\n    content: '';\n    opacity: 0.9;\n    z-index: 1;\n    -webkit-transform: skew(45deg) translateX(-155%);\n    transform: skew(45deg) translateX(-155%); }\n\n.snip1573[_ngcontent-%COMP%]:after {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transition: all 0.35s ease;\n    background-color: #000000;\n    border-left: 3px solid #fff;\n    border-right: 3px solid #fff;\n    content: '';\n    opacity: 0.9;\n    z-index: 1;\n    -webkit-transform: skew(45deg) translateX(155%);\n    transform: skew(45deg) translateX(155%); }\n\n.snip1573[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    max-width: 100%;\n    vertical-align: top; }\n\n.snip1573[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    z-index: 2;\n    -webkit-transform: translate(-50%, -50%) scale(0.5);\n    transform: translate(-50%, -50%) scale(0.5);\n    opacity: 0;\n    box-shadow: 0 0 10px #000000; }\n\n.snip1573[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    background-color: #000000;\n    border: 2px solid #fff;\n    color: #fff;\n    font-size: 1em;\n    font-weight: 600;\n    letter-spacing: 1px;\n    margin: 0;\n    padding: 5px 10px;\n    text-transform: uppercase; }\n\n.snip1573[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 3; }\n\n.snip1573[_ngcontent-%COMP%]:hover    > img[_ngcontent-%COMP%] {\n    opacity: 0.5; }\n\n.snip1573[_ngcontent-%COMP%]:hover:before {\n    -webkit-transform: skew(45deg) translateX(-55%);\n    transform: skew(45deg) translateX(-55%); }\n\n.snip1573[_ngcontent-%COMP%]:hover:after {\n    -webkit-transform: skew(45deg) translateX(55%);\n    transform: skew(45deg) translateX(55%); }\n\n.snip1573[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%] {\n    -webkit-transform: translate(-50%, -50%) scale(1);\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1; }\n\n.snip1573.hover[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  opacity: 0.5; }\n\n.snip1573.hover[_ngcontent-%COMP%]:before {\n  -webkit-transform: skew(45deg) translateX(-55%);\n  transform: skew(45deg) translateX(-55%); }\n\n.snip1573.hover[_ngcontent-%COMP%]:after {\n  -webkit-transform: skew(45deg) translateX(55%);\n  transform: skew(45deg) translateX(55%); }\n\n.snip1573.hover[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  -webkit-transform: translate(-50%, -50%) scale(1);\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1; }\n\n.head-span[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1; }\n\n.sub-head-span[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 500;\n  line-height: 1;\n  color: #fff; }\n\n.para-span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px; }\n\n.mobile_sec[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #243949 0%, #517fa4 100%); }\n\n.mobile_phone[_ngcontent-%COMP%] {\n  padding: 20px 0 20px 0; }\n\n.btn-lg[_ngcontent-%COMP%] {\n  color: #fff;\n  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%);\n  background-blend-mode: multiply; }\n\n@media screen and (max-width: 480px) {\n  .photobox[_ngcontent-%COMP%] {\n    width: 100%; } }\n\n@media screen and (min-width: 768px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 62.5%; } }\n\n@media screen and (max-width: 767px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 50%; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var AOS = __webpack_require__(/*! aos */ "aos");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        AOS.init();
    };
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/mobile/mobile.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/mobile/mobile.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./mobile.component.scss.shim.ngstyle */ "./src/app/mobile/mobile.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./mobile.component */ "./src/app/mobile/mobile.component.ts");
var styles_MobileComponent = [i0.styles];
var RenderType_MobileComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MobileComponent, data: {} });
exports.RenderType_MobileComponent = RenderType_MobileComponent;
function View_MobileComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "head", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School Management App India | School ERP Mobile Application | E-Saraswati"])), (_l()(), i1.ɵeld(3, 0, null, null, 0, "meta", [["content", "Make your school management process easier with E-Saraswati school management app. E-Saraswati is an easy-to-use school ERP application compatible with Android and iOS smartphones. Download now!"], ["name", "description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "meta", [["content", "School ERP App, School Management App For Android, School ERP Download, School ERP Application, School Management App India"], ["name", "keywords"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "meta", [["content", "!"], ["name", "fragment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "link", [["href", "http://e-saraswati.org/mobile-app"], ["rel", "canonical"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 20, "div", [["class", "container-fluid mobile_sec"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 19, "div", [["class", "container mobile_phone"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 18, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 0, "div", [["class", "col-md-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 3, "div", [["class", "col-md-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 2, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(13, 0, null, null, 1, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(14, 0, null, null, 0, "img", [["class", "screen_shots1"], ["src", "assets/images/phone-app.png"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 11, "div", [["class", "col-md-7 mobile_col"]], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 10, "div", [["style", "padding-top:30px;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(17, 0, null, null, 1, "h1", [["class", "head-span"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-Saraswati - Feature Rich Mobile Application"])), (_l()(), i1.ɵeld(19, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(20, 0, null, null, 1, "h2", [["class", "sub-head-span"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Take your school management process to cloud 9 with E-Saraswati Mobile App"])), (_l()(), i1.ɵeld(22, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 1, "p", [["class", "para-span"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enjoy the benefits of our feature-rich smartphone application that aims to manage all your school information efficiently. E-Saraswati is a customized school management app for Android and iOS with a login for Student, Parent, Teacher, and Management, giving real-time information for the most recent happening at the school."])), (_l()(), i1.ɵeld(25, 0, null, null, 1, "button", [["class", "btn btn-lg"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.mobile_link() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i1.ɵted(-1, null, ["GET IT NOW"])), (_l()(), i1.ɵeld(27, 0, null, null, 0, "div", [["class", "col-md-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(28, 0, null, null, 68, "div", [["class", "mobile_content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 11, "div", [["class", "container-fluid first_section"]], null, null, null, null, null)), (_l()(), i1.ɵeld(31, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(32, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 6, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(34, 0, null, null, 2, "div", [["class", "sub-heading_line"], ["style", "padding-top:0;"]], null, null, null, null, null)), (_l()(), i1.ɵeld(35, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-Saraswati App"])), (_l()(), i1.ɵeld(37, 0, null, null, 2, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-Saraswati is an easy to use mobile-based school management system, opted by a large number of schools in India. It is an online school ERP app that brings all the school processes into a single application, you can keep students, teachers, and parents on the same page with customized dashboards and email / SMS notifications on mobile and web."])), (_l()(), i1.ɵeld(40, 0, null, null, 1, "div", [["class", "col-md-4 text-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(41, 0, null, null, 0, "img", [["class", "screen_shots img_2"], ["src", "assets/images/SS-2.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(43, 0, null, null, 13, "div", [["class", "container-fluid second_section"]], null, null, null, null, null)), (_l()(), i1.ɵeld(44, 0, null, null, 12, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(45, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 2, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(47, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(48, 0, null, null, 0, "img", [["class", "screen_shots img_1"], ["src", "assets/images/SS-3.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 6, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 2, "div", [["class", "sub-heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Core Modules"])), (_l()(), i1.ɵeld(53, 0, null, null, 2, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Make your school management process hassle-free with E-Saraswati school management mobile application. Our school management mobile application consists of all the core modules that aid you manage your school efficiently. With the all-new E-Saraswati mobile application students/teachers/parents can view attendance, homework, assignments, timetable, exam reports, results, notice board, fees details and much more."])), (_l()(), i1.ɵeld(56, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 11, "div", [["class", "container-fluid third_section"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 10, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 2, "div", [["class", "sub-heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(62, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Fees Management"])), (_l()(), i1.ɵeld(64, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 3, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 2, "div", [["class", "para_line1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(67, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Users can now track comprehensive information regarding fee schedule, fee paid, upcoming installment, and pending installments for all the fee to be paid."])), (_l()(), i1.ɵeld(69, 0, null, null, 13, "div", [["class", "container-fluid fourth_section"]], null, null, null, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 12, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(72, 0, null, null, 6, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(73, 0, null, null, 2, "div", [["class", "sub-heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 1, "h3", [["style", "padding-top:10px;"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Latest News And Updates"])), (_l()(), i1.ɵeld(76, 0, null, null, 2, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-Saraswati mobile app provides you a complete timeline view to check recent updates, assignments, remarks, holidays, homework, fees, results related information that is being sent by the school on a regular basis."])), (_l()(), i1.ɵeld(79, 0, null, null, 2, "div", [["class", "col-md-4 text-right"]], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 0, "img", [["class", "screen_shots img_1"], ["src", "assets/images/SS-7.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(83, 0, null, null, 13, "div", [["class", "container-fluid fifth_section"]], null, null, null, null, null)), (_l()(), i1.ɵeld(84, 0, null, null, 12, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(86, 0, null, null, 2, "div", [["class", "col-md-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(87, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 0, "img", [["class", "screen_shots img_1"], ["src", "assets/images/SS-8.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 6, "div", [["class", "col-md-8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 2, "div", [["class", "sub-heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(91, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Daily Attendance"])), (_l()(), i1.ɵeld(93, 0, null, null, 2, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(94, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Teachers and Parents can get a detail view of the student attendance in the current academic year including presents, absentees, and leaves."])), (_l()(), i1.ɵeld(96, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null); }
exports.View_MobileComponent_0 = View_MobileComponent_0;
function View_MobileComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-mobile", [], null, null, null, View_MobileComponent_0, RenderType_MobileComponent)), i1.ɵdid(1, 114688, null, 0, i2.MobileComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_MobileComponent_Host_0 = View_MobileComponent_Host_0;
var MobileComponentNgFactory = i1.ɵccf("app-mobile", i2.MobileComponent, View_MobileComponent_Host_0, {}, {}, []);
exports.MobileComponentNgFactory = MobileComponentNgFactory;


/***/ }),

/***/ "./src/app/mobile/mobile.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/mobile/mobile.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".screen_shots[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto; }\n\n.screen_shots1[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto; }\n\n.mobile_sec[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #243949 0%, #517fa4 100%); }\n\n.mobile_phone[_ngcontent-%COMP%] {\n  padding: 10px 0 10px 0; }\n\n.head-span[_ngcontent-%COMP%] {\n  font-size: 43px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1; }\n\n.sub-head-span[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  line-height: 1;\n  color: #fff; }\n\n.para-span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px; }\n\n.btn-lg[_ngcontent-%COMP%] {\n  color: #fff;\n  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%);\n  background-blend-mode: multiply;\n  border-radius: 20px; }\n\n.heading_line[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  text-align: center;\n  font-size: 30px; }\n\n.mobile_content[_ngcontent-%COMP%] {\n  font-family: myFirstFont; }\n\n.para_line[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 2.3; }\n\n.para_line1[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 2.3; }\n\n.sub-heading_line[_ngcontent-%COMP%] {\n  padding: 20px 0 20px 0;\n  text-align: center;\n   }\n\n.sub-heading_line[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 0rem !important;\n    font-size: 28px;\n    font-weight: 400;\n    color: #fa7606; }\n\n.img_1[_ngcontent-%COMP%], .img_2[_ngcontent-%COMP%] {\n  width: 55%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.second_section[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); }\n\n.fourth_section[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/mobile/mobile.component.ts":
/*!********************************************!*\
  !*** ./src/app/mobile/mobile.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var MobileComponent = /** @class */ (function () {
    function MobileComponent() {
    }
    MobileComponent.prototype.ngOnInit = function () {
    };
    MobileComponent.prototype.mobile_link = function () {
        window.open("https://play.google.com/store/apps/details?id=com.esaraswati&hl=en", "_blank");
    };
    return MobileComponent;
}());
exports.MobileComponent = MobileComponent;


/***/ }),

/***/ "./src/app/price/price.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/price/price.component.ngfactory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./price.component.scss.shim.ngstyle */ "./src/app/price/price.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var i4 = __webpack_require__(/*! ./price.component */ "./src/app/price/price.component.ts");
var i5 = __webpack_require__(/*! ./price.service */ "./src/app/price/price.service.ts");
var styles_PriceComponent = [i0.styles];
var RenderType_PriceComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_PriceComponent, data: {} });
exports.RenderType_PriceComponent = RenderType_PriceComponent;
function View_PriceComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name is required"]))], null, null); }
function View_PriceComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name must contain only letters."]))], null, null); }
function View_PriceComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_2)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_3)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f.stanname.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.f.stanname.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School Name is required."]))], null, null); }
function View_PriceComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_5)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f.stanschool.errors.required; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PriceComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email is required"]))], null, null); }
function View_PriceComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email must be a valid email address."]))], null, null); }
function View_PriceComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_7)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_8)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f.stanemail.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.f.stanemail.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Number is required"]))], null, null); }
function View_PriceComponent_11(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Number must contain 10 digits."]))], null, null); }
function View_PriceComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_10)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_11)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f.stancontact.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.f.stancontact.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_13(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name is required"]))], null, null); }
function View_PriceComponent_14(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name must contain only letters."]))], null, null); }
function View_PriceComponent_12(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_13)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_14)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.g.proname.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.g.proname.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_16(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School Name is required."]))], null, null); }
function View_PriceComponent_15(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_16)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.g.proschool.errors.required; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PriceComponent_18(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email is required"]))], null, null); }
function View_PriceComponent_19(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email must be a valid email address."]))], null, null); }
function View_PriceComponent_17(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_18)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_19)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.g.proemail.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.g.proemail.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_21(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Number is required"]))], null, null); }
function View_PriceComponent_22(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Number must contain 10 digits."]))], null, null); }
function View_PriceComponent_20(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_21)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_22)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.g.procontact.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.g.procontact.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_24(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name is required"]))], null, null); }
function View_PriceComponent_25(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Name must contain letters only."]))], null, null); }
function View_PriceComponent_23(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_24)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_25)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i.entername.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.i.entername.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_27(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School Name is required."]))], null, null); }
function View_PriceComponent_26(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 2, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_27)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i.enterschool.errors.required; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PriceComponent_29(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email is required"]))], null, null); }
function View_PriceComponent_30(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Email must be a valid email address."]))], null, null); }
function View_PriceComponent_28(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_29)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_30)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i.enteremail.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.i.enteremail.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_32(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Number is required"]))], null, null); }
function View_PriceComponent_33(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Contact Number must contain 10 digits."]))], null, null); }
function View_PriceComponent_31(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "div", [["class", "invalid-feedback alert alert-danger"]], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_32)), i1.ɵdid(2, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_33)), i1.ɵdid(4, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i.entercontact.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.i.entercontact.errors.pattern; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PriceComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "head", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["School Management Software Price In India | School ERP Pricing | E-Saraswati"])), (_l()(), i1.ɵeld(3, 0, null, null, 0, "meta", [["content", "Need an affordable school management software? Get E-Saraswati software at the best prices & perform your daily school operations seamlessly. Check out our price list & choose the right plan for your school!"], ["name", "description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "meta", [["content", "School Management Software Price List In India, School Management Software Price, School Management Software Price List, School ERP Pricing, School Management Software Price In India, School ERP Software Price In India"], ["name", "keywords"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "meta", [["content", "!"], ["name", "fragment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "link", [["href", "http://e-saraswati.org/pricing"], ["rel", "canonical"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 397, "div", [["class", "price_content"], ["id", "price_pge"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 395, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 394, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 393, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["We Have The Right Pricing For Your School!"])), (_l()(), i1.ɵeld(14, 0, null, null, 2, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Automate your school activities at an affordable price with E-Saraswati School management software. We understand the fact that every school has different needs. Thus, we have designed different pricing and plans for different institutes, the institutes can choose the plan as per their requirements. Check out our pricing plans and get started today!"])), (_l()(), i1.ɵeld(17, 0, null, null, 2, "div", [["class", "sub-heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Affordable Plans for Smart Institutes"])), (_l()(), i1.ɵeld(20, 0, null, null, 383, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 0, "div", [["class", "col-md-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 380, "div", [["class", "col-md-10"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 379, "div", [["class", "card-group"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 32, "div", [["class", "card client"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 6, "div", [["class", "card-header bg-success text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "h3", [["class", "head_pri"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["STANDARD"])), (_l()(), i1.ɵeld(28, 0, null, null, 1, "p", [["class", "semi-head_pri"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@ 14999/-"])), (_l()(), i1.ɵeld(30, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Annualy"])), (_l()(), i1.ɵeld(32, 0, null, null, 20, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Academics Module"])), (_l()(), i1.ɵeld(35, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Exam Management Module"])), (_l()(), i1.ɵeld(37, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Communication Module"])), (_l()(), i1.ɵeld(39, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Fees Management Module"])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Attendence Module"])), (_l()(), i1.ɵeld(43, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Calendar"])), (_l()(), i1.ɵeld(45, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Message"])), (_l()(), i1.ɵeld(47, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Gallery"])), (_l()(), i1.ɵeld(49, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Task"])), (_l()(), i1.ɵeld(51, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Promotion"])), (_l()(), i1.ɵeld(53, 0, null, null, 3, "div", [["class", "card-footer text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 2, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(55, 0, null, null, 1, "button", [["class", "btn btn-lg peach-gradient waves-effect standard_plan"], ["data-target", "#sideModalBRSuccess_S"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CONTACT US"])), (_l()(), i1.ɵeld(57, 0, null, null, 96, "div", [["aria-hidden", "true"], ["aria-labelledby", "myModalLabel"], ["class", "modal fade right show"], ["id", "sideModalBRSuccess_S"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(58, 0, null, null, 95, "div", [["class", "modal-dialog modal-side modal-bottom-right modal-notify modal-success"], ["role", "document"]], null, null, null, null, null)), (_l()(), i1.ɵeld(59, 0, null, null, 94, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 5, "div", [["class", "modal-header standard_head"]], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 1, "p", [["class", "heading lead"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You are requesting for STANDARD PLAN"])), (_l()(), i1.ɵeld(63, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "white-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(66, 0, null, null, 87, "div", [["class", "modal-body mx-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(67, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(68, 0, null, null, 1, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(69, 0, null, null, 0, "i", [["class", "fa fa-check fa-4x mb-3 animated rotateIn standard_icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(70, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(71, 0, null, null, 1, "h6", [["class", "plan_price"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@ 14999/-"])), (_l()(), i1.ɵeld(73, 0, null, null, 80, "form", [["method", "POST"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 75).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 75).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendMail(i1.ɵnov(_v, 80).value, i1.ɵnov(_v, 96).value, i1.ɵnov(_v, 110).value, i1.ɵnov(_v, 126).value, i1.ɵnov(_v, 142).value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(74, 16384, null, 0, i3.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(75, 540672, null, 0, i3.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.FormGroupDirective]), i1.ɵdid(77, 16384, null, 0, i3.NgControlStatusGroup, [[4, i3.ControlContainer]], null, null), (_l()(), i1.ɵeld(78, 0, null, null, 15, "div", [["class", " md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(79, 0, null, null, 0, "i", [["class", "fa fa-user prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(80, 0, [["stanname", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "stanname"], ["id", "form34"], ["pattern", "[a-zA-Z ]*"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 83)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 83).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 83)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 83)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(81, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(82, { "is-invalid": 0 }), i1.ɵdid(83, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(84, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(87, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(89, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(90, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["for", "form34"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Name"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_1)), i1.ɵdid(93, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(94, 0, null, null, 13, "div", [["class", " md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(95, 0, null, null, 0, "i", [["class", "fa fa-building prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(96, 0, [["stanschool", 1]], null, 7, "input", [["class", "form-control"], ["formControlName", "stanschool"], ["id", "form34"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 99)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 99).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 99)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 99)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(97, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(98, { "is-invalid": 0 }), i1.ɵdid(99, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(101, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(103, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(104, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form34"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Company / School Name"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_4)), i1.ɵdid(107, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(108, 0, null, null, 15, "div", [["class", " md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(109, 0, null, null, 0, "i", [["class", "fa fa-envelope prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(110, 0, [["stanemail", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "stanemail"], ["id", "form29"], ["pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"], ["type", "email"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 113)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 113).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 113)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 113)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(111, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(112, { "is-invalid": 0 }), i1.ɵdid(113, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(114, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(117, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(119, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(120, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form29"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Email"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_6)), i1.ɵdid(123, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(124, 0, null, null, 15, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(125, 0, null, null, 0, "i", [["class", "fa fa-phone-square prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(126, 0, [["stancontact", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "stancontact"], ["id", "form32"], ["pattern", "^((\\\\+91-?)|0)?[0-9]{10}$"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 129)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 129).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 129)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 129)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(127, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(128, { "is-invalid": 0 }), i1.ɵdid(129, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(130, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(133, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(135, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(136, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form32"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Contact No."])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_9)), i1.ɵdid(139, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(140, 0, null, null, 9, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(141, 0, null, null, 0, "i", [["class", "fa fa-pencil prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(142, 0, [["stanmessage", 1]], null, 5, "textarea", [["class", "md-textarea form-control"], ["formControlName", "stanmessage"], ["id", "form8"], ["rows", "2"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 143)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 143).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 143)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 143)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(143, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(145, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(147, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(148, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form8"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Message (Optional)"])), (_l()(), i1.ɵeld(150, 0, null, null, 3, "div", [["class", "d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(151, 0, null, null, 2, "button", [["class", "btn btn-default"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Send Request"])), (_l()(), i1.ɵeld(153, 0, null, null, 0, "i", [["class", "fa fa-paper-plane-o ml-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(154, 0, null, null, 28, "div", [["class", "card client"]], null, null, null, null, null)), (_l()(), i1.ɵeld(155, 0, null, null, 6, "div", [["class", "card-header bg-light text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(156, 0, null, null, 1, "h3", [["class", "head_pri"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["PRO"])), (_l()(), i1.ɵeld(158, 0, null, null, 1, "p", [["class", "semi-head_pri"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@ 49999/-"])), (_l()(), i1.ɵeld(160, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["For a Decade"])), (_l()(), i1.ɵeld(162, 0, null, null, 16, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(163, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["All Basic Features"])), (_l()(), i1.ɵeld(165, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Library Management Module"])), (_l()(), i1.ɵeld(167, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Payroll Management Module"])), (_l()(), i1.ɵeld(169, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Transport Management Module"])), (_l()(), i1.ɵeld(171, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Finance Management"])), (_l()(), i1.ɵeld(173, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Hostel Management"])), (_l()(), i1.ɵeld(175, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Inventory Management"])), (_l()(), i1.ɵeld(177, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Maintenance - 15% of total cost/Year"])), (_l()(), i1.ɵeld(179, 0, null, null, 3, "div", [["class", "card-footer text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(180, 0, null, null, 2, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(181, 0, null, null, 1, "button", [["class", "btn btn-lg peach-gradient waves-effect standard_plan"], ["data-target", "#sideModalBRSuccess_P"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CONTACT US"])), (_l()(), i1.ɵeld(183, 0, null, null, 96, "div", [["aria-hidden", "true"], ["aria-labelledby", "myModalLabel"], ["class", "modal fade right show"], ["id", "sideModalBRSuccess_P"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(184, 0, null, null, 95, "div", [["class", "modal-dialog modal-side modal-bottom-right modal-notify modal-default"], ["role", "document"]], null, null, null, null, null)), (_l()(), i1.ɵeld(185, 0, null, null, 94, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(186, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(187, 0, null, null, 1, "p", [["class", "heading lead"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You are requesting for PRO PLAN"])), (_l()(), i1.ɵeld(189, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(190, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "white-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(192, 0, null, null, 87, "div", [["class", "modal-body mx-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(193, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(194, 0, null, null, 1, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(195, 0, null, null, 0, "i", [["class", "fa fa-check fa-4x mb-3 animated rotateIn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(196, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(197, 0, null, null, 1, "h6", [["class", "plan_price"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@ 49999/-"])), (_l()(), i1.ɵeld(199, 0, null, null, 80, "form", [["method", "POST"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 201).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 201).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendMail2(i1.ɵnov(_v, 206).value, i1.ɵnov(_v, 222).value, i1.ɵnov(_v, 236).value, i1.ɵnov(_v, 252).value, i1.ɵnov(_v, 268).value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(200, 16384, null, 0, i3.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(201, 540672, null, 0, i3.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.FormGroupDirective]), i1.ɵdid(203, 16384, null, 0, i3.NgControlStatusGroup, [[4, i3.ControlContainer]], null, null), (_l()(), i1.ɵeld(204, 0, null, null, 15, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(205, 0, null, null, 0, "i", [["class", "fa fa-user prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(206, 0, [["proname", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "proname"], ["id", "form34"], ["pattern", "[a-zA-Z ]*"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 209)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 209).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 209)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 209)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(207, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(208, { "is-invalid": 0 }), i1.ɵdid(209, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(210, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(213, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(215, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(216, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form34"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Name"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_12)), i1.ɵdid(219, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(220, 0, null, null, 13, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(221, 0, null, null, 0, "i", [["class", "fa fa-user prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(222, 0, [["proschool", 1]], null, 7, "input", [["class", "form-control"], ["formControlName", "proschool"], ["id", "form34"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 225)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 225).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 225)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 225)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(223, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(224, { "is-invalid": 0 }), i1.ɵdid(225, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(227, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(229, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(230, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form34"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Company / School Name"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_15)), i1.ɵdid(233, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(234, 0, null, null, 15, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(235, 0, null, null, 0, "i", [["class", "fa fa-envelope prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(236, 0, [["proemail", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "proemail"], ["id", "form29"], ["pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"], ["type", "email"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 239)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 239).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 239)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 239)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(237, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(238, { "is-invalid": 0 }), i1.ɵdid(239, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(240, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(243, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(245, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(246, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form29"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your E-mail"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_17)), i1.ɵdid(249, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(250, 0, null, null, 15, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(251, 0, null, null, 0, "i", [["class", "fa fa-tag prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(252, 0, [["procontact", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "procontact"], ["id", "form32"], ["pattern", "^((\\\\+91-?)|0)?[0-9]{10}$"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 255)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 255).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 255)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 255)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(253, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(254, { "is-invalid": 0 }), i1.ɵdid(255, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(256, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(259, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(261, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(262, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form32"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Contact No."])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_20)), i1.ɵdid(265, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(266, 0, null, null, 9, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(267, 0, null, null, 0, "i", [["class", "fa fa-pencil prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(268, 0, [["promessage", 1]], null, 5, "textarea", [["class", "md-textarea form-control"], ["formControlName", "promessage"], ["id", "form8"], ["rows", "2"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 269)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 269).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 269)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 269)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(269, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(271, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(273, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(274, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form8"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Message (Optional)"])), (_l()(), i1.ɵeld(276, 0, null, null, 3, "div", [["class", "d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(277, 0, null, null, 2, "button", [["class", "btn btn-default"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Send Request"])), (_l()(), i1.ɵeld(279, 0, null, null, 0, "i", [["class", "fa fa-paper-plane-o ml-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(280, 0, null, null, 24, "div", [["class", "card client"]], null, null, null, null, null)), (_l()(), i1.ɵeld(281, 0, null, null, 6, "div", [["class", "card-header bg-info text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(282, 0, null, null, 1, "h3", [["class", "head_pri"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["ENTERPRIZE"])), (_l()(), i1.ɵeld(284, 0, null, null, 1, "p", [["class", "semi-head_pri"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@ 99999/-"])), (_l()(), i1.ɵeld(286, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["For Life Time"])), (_l()(), i1.ɵeld(288, 0, null, null, 12, "div", [["class", "card-body text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(289, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["All Pro Features"])), (_l()(), i1.ɵeld(291, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Source Code"])), (_l()(), i1.ɵeld(293, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Dedicated Server"])), (_l()(), i1.ɵeld(295, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Dedicated Web Hosting"])), (_l()(), i1.ɵeld(297, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Multiple School Creation"])), (_l()(), i1.ɵeld(299, 0, null, null, 1, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Admin Access"])), (_l()(), i1.ɵeld(301, 0, null, null, 3, "div", [["class", "card-footer text-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(302, 0, null, null, 2, "p", [["class", "card-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(303, 0, null, null, 1, "button", [["class", "btn btn-lg peach-gradient waves-effect standard_plan"], ["data-target", "#sideModalBRSuccess_E"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CONTACT US"])), (_l()(), i1.ɵeld(305, 0, null, null, 96, "div", [["aria-hidden", "true"], ["aria-labelledby", "myModalLabel"], ["class", "modal fade right show"], ["id", "sideModalBRSuccess_E"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(306, 0, null, null, 95, "div", [["class", "modal-dialog modal-side modal-bottom-right modal-notify modal-info"], ["role", "document"]], null, null, null, null, null)), (_l()(), i1.ɵeld(307, 0, null, null, 94, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(308, 0, null, null, 5, "div", [["class", "modal-header enter_head"]], null, null, null, null, null)), (_l()(), i1.ɵeld(309, 0, null, null, 1, "p", [["class", "heading lead"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["You are requesting for ENTERPRIZE PLAN"])), (_l()(), i1.ɵeld(311, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵeld(312, 0, null, null, 1, "span", [["aria-hidden", "true"], ["class", "white-text"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(314, 0, null, null, 87, "div", [["class", "modal-body mx-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(315, 0, null, null, 5, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(316, 0, null, null, 1, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(317, 0, null, null, 0, "i", [["class", "fa fa-check fa-4x mb-3 animated rotateIn enter_icon"]], null, null, null, null, null)), (_l()(), i1.ɵeld(318, 0, null, null, 2, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(319, 0, null, null, 1, "h6", [["class", "plan_price"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["@ 99999/-"])), (_l()(), i1.ɵeld(321, 0, null, null, 80, "form", [["method", "POST"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 323).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 323).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.sendMail3(i1.ɵnov(_v, 328).value, i1.ɵnov(_v, 344).value, i1.ɵnov(_v, 358).value, i1.ɵnov(_v, 374).value, i1.ɵnov(_v, 390).value) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(322, 16384, null, 0, i3.ɵangular_packages_forms_forms_bg, [], null, null), i1.ɵdid(323, 540672, null, 0, i3.FormGroupDirective, [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.FormGroupDirective]), i1.ɵdid(325, 16384, null, 0, i3.NgControlStatusGroup, [[4, i3.ControlContainer]], null, null), (_l()(), i1.ɵeld(326, 0, null, null, 15, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(327, 0, null, null, 0, "i", [["class", "fa fa-user prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(328, 0, [["entername", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "entername"], ["id", "form34"], ["pattern", "[a-zA-Z ]*"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 331)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 331).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 331)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 331)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(329, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(330, { "is-invalid": 0 }), i1.ɵdid(331, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(332, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(335, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(337, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(338, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form34"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Name"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_23)), i1.ɵdid(341, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(342, 0, null, null, 13, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(343, 0, null, null, 0, "i", [["class", "fa fa-building prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(344, 0, [["enterschool", 1]], null, 7, "input", [["class", "form-control"], ["formControlName", "enterschool"], ["id", "form34"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 347)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 347).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 347)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 347)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(345, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(346, { "is-invalid": 0 }), i1.ɵdid(347, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(349, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(351, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(352, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form34"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Company / School Name"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_26)), i1.ɵdid(355, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(356, 0, null, null, 15, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(357, 0, null, null, 0, "i", [["class", "fa fa-envelope prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(358, 0, [["enteremail", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "enteremail"], ["id", "form29"], ["pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"], ["type", "email"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 361)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 361).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 361)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 361)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(359, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(360, { "is-invalid": 0 }), i1.ɵdid(361, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(362, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(365, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(367, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(368, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form29"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Email"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_28)), i1.ɵdid(371, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(372, 0, null, null, 15, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(373, 0, null, null, 0, "i", [["class", "fa fa-phone-square prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(374, 0, [["entercontact", 1]], null, 9, "input", [["class", "form-control"], ["formControlName", "entercontact"], ["id", "form32"], ["pattern", "^((\\\\+91-?)|0)?[0-9]{10}$"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 377)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 377).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 377)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 377)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(375, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i1.ɵpod(376, { "is-invalid": 0 }), i1.ɵdid(377, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(378, 540672, null, 0, i3.PatternValidator, [], { pattern: [0, "pattern"] }, null), i1.ɵprd(1024, null, i3.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i3.PatternValidator]), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(381, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [6, i3.NG_VALIDATORS], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(383, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(384, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form32"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Contact No."])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PriceComponent_31)), i1.ɵdid(387, 16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(388, 0, null, null, 9, "div", [["class", "md-form mb-5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(389, 0, null, null, 0, "i", [["class", "fa fa-pencil prefix grey-text"]], null, null, null, null, null)), (_l()(), i1.ɵeld(390, 0, [["entermessage", 1]], null, 5, "textarea", [["class", "md-textarea form-control"], ["formControlName", "entermessage"], ["id", "form8"], ["rows", "2"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 391)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 391).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 391)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 391)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(391, 16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.DefaultValueAccessor]), i1.ɵdid(393, 671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [6, i3.NG_VALUE_ACCESSOR], [2, i3.ɵangular_packages_forms_forms_j]], { name: [0, "name"] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(395, 16384, null, 0, i3.NgControlStatus, [[4, i3.NgControl]], null, null), (_l()(), i1.ɵeld(396, 0, null, null, 1, "label", [["class", "form-control-placeholder"], ["data-error", "wrong"], ["data-success", "right"], ["for", "form8"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Enter Your Message (Optional)"])), (_l()(), i1.ɵeld(398, 0, null, null, 3, "div", [["class", "d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(399, 0, null, null, 2, "button", [["class", "btn btn-default"], ["type", "submit"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Send Request"])), (_l()(), i1.ɵeld(401, 0, null, null, 0, "i", [["class", "fa fa-paper-plane-o ml-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(402, 0, null, null, 0, "div", [["class", "clearer"]], null, null, null, null, null)), (_l()(), i1.ɵeld(403, 0, null, null, 0, "div", [["class", "col-md-1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(404, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.priceForm; _ck(_v, 75, 0, currVal_7); var currVal_16 = "form-control"; var currVal_17 = _ck(_v, 82, 0, (_co.submitted && _co.f.stanname.errors)); _ck(_v, 81, 0, currVal_16, currVal_17); var currVal_18 = "[a-zA-Z ]*"; _ck(_v, 84, 0, currVal_18); var currVal_19 = "stanname"; _ck(_v, 87, 0, currVal_19); var currVal_20 = (_co.submitted && _co.f.stanname.errors); _ck(_v, 93, 0, currVal_20); var currVal_28 = "form-control"; var currVal_29 = _ck(_v, 98, 0, (_co.submitted && _co.f.stanschool.errors)); _ck(_v, 97, 0, currVal_28, currVal_29); var currVal_30 = "stanschool"; _ck(_v, 101, 0, currVal_30); var currVal_31 = (_co.submitted && _co.f.stanschool.errors); _ck(_v, 107, 0, currVal_31); var currVal_40 = "form-control"; var currVal_41 = _ck(_v, 112, 0, (_co.submitted && _co.f.stanemail.errors)); _ck(_v, 111, 0, currVal_40, currVal_41); var currVal_42 = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; _ck(_v, 114, 0, currVal_42); var currVal_43 = "stanemail"; _ck(_v, 117, 0, currVal_43); var currVal_44 = (_co.submitted && _co.f.stanemail.errors); _ck(_v, 123, 0, currVal_44); var currVal_53 = "form-control"; var currVal_54 = _ck(_v, 128, 0, (_co.submitted && _co.f.stancontact.errors)); _ck(_v, 127, 0, currVal_53, currVal_54); var currVal_55 = "^((\\\\+91-?)|0)?[0-9]{10}$"; _ck(_v, 130, 0, currVal_55); var currVal_56 = "stancontact"; _ck(_v, 133, 0, currVal_56); var currVal_57 = (_co.submitted && _co.f.stancontact.errors); _ck(_v, 139, 0, currVal_57); var currVal_65 = "stanmessage"; _ck(_v, 145, 0, currVal_65); var currVal_73 = _co.priceForm2; _ck(_v, 201, 0, currVal_73); var currVal_82 = "form-control"; var currVal_83 = _ck(_v, 208, 0, (_co.submitted && _co.g.proname.errors)); _ck(_v, 207, 0, currVal_82, currVal_83); var currVal_84 = "[a-zA-Z ]*"; _ck(_v, 210, 0, currVal_84); var currVal_85 = "proname"; _ck(_v, 213, 0, currVal_85); var currVal_86 = (_co.submitted && _co.g.proname.errors); _ck(_v, 219, 0, currVal_86); var currVal_94 = "form-control"; var currVal_95 = _ck(_v, 224, 0, (_co.submitted && _co.g.proschool.errors)); _ck(_v, 223, 0, currVal_94, currVal_95); var currVal_96 = "proschool"; _ck(_v, 227, 0, currVal_96); var currVal_97 = (_co.submitted && _co.g.proschool.errors); _ck(_v, 233, 0, currVal_97); var currVal_106 = "form-control"; var currVal_107 = _ck(_v, 238, 0, (_co.submitted && _co.g.proemail.errors)); _ck(_v, 237, 0, currVal_106, currVal_107); var currVal_108 = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; _ck(_v, 240, 0, currVal_108); var currVal_109 = "proemail"; _ck(_v, 243, 0, currVal_109); var currVal_110 = (_co.submitted && _co.g.proemail.errors); _ck(_v, 249, 0, currVal_110); var currVal_119 = "form-control"; var currVal_120 = _ck(_v, 254, 0, (_co.submitted && _co.g.procontact.errors)); _ck(_v, 253, 0, currVal_119, currVal_120); var currVal_121 = "^((\\\\+91-?)|0)?[0-9]{10}$"; _ck(_v, 256, 0, currVal_121); var currVal_122 = "procontact"; _ck(_v, 259, 0, currVal_122); var currVal_123 = (_co.submitted && _co.g.procontact.errors); _ck(_v, 265, 0, currVal_123); var currVal_131 = "promessage"; _ck(_v, 271, 0, currVal_131); var currVal_139 = _co.priceForm3; _ck(_v, 323, 0, currVal_139); var currVal_148 = "form-control"; var currVal_149 = _ck(_v, 330, 0, (_co.submitted && _co.i.entername.errors)); _ck(_v, 329, 0, currVal_148, currVal_149); var currVal_150 = "[a-zA-Z ]*"; _ck(_v, 332, 0, currVal_150); var currVal_151 = "entername"; _ck(_v, 335, 0, currVal_151); var currVal_152 = (_co.submitted && _co.i.entername.errors); _ck(_v, 341, 0, currVal_152); var currVal_160 = "form-control"; var currVal_161 = _ck(_v, 346, 0, (_co.submitted && _co.i.enterschool.errors)); _ck(_v, 345, 0, currVal_160, currVal_161); var currVal_162 = "enterschool"; _ck(_v, 349, 0, currVal_162); var currVal_163 = (_co.submitted && _co.i.enterschool.errors); _ck(_v, 355, 0, currVal_163); var currVal_172 = "form-control"; var currVal_173 = _ck(_v, 360, 0, (_co.submitted && _co.i.enteremail.errors)); _ck(_v, 359, 0, currVal_172, currVal_173); var currVal_174 = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; _ck(_v, 362, 0, currVal_174); var currVal_175 = "enteremail"; _ck(_v, 365, 0, currVal_175); var currVal_176 = (_co.submitted && _co.i.enteremail.errors); _ck(_v, 371, 0, currVal_176); var currVal_185 = "form-control"; var currVal_186 = _ck(_v, 376, 0, (_co.submitted && _co.i.entercontact.errors)); _ck(_v, 375, 0, currVal_185, currVal_186); var currVal_187 = "^((\\\\+91-?)|0)?[0-9]{10}$"; _ck(_v, 378, 0, currVal_187); var currVal_188 = "entercontact"; _ck(_v, 381, 0, currVal_188); var currVal_189 = (_co.submitted && _co.i.entercontact.errors); _ck(_v, 387, 0, currVal_189); var currVal_197 = "entermessage"; _ck(_v, 393, 0, currVal_197); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 77).ngClassUntouched; var currVal_1 = i1.ɵnov(_v, 77).ngClassTouched; var currVal_2 = i1.ɵnov(_v, 77).ngClassPristine; var currVal_3 = i1.ɵnov(_v, 77).ngClassDirty; var currVal_4 = i1.ɵnov(_v, 77).ngClassValid; var currVal_5 = i1.ɵnov(_v, 77).ngClassInvalid; var currVal_6 = i1.ɵnov(_v, 77).ngClassPending; _ck(_v, 73, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = (i1.ɵnov(_v, 84).pattern ? i1.ɵnov(_v, 84).pattern : null); var currVal_9 = i1.ɵnov(_v, 89).ngClassUntouched; var currVal_10 = i1.ɵnov(_v, 89).ngClassTouched; var currVal_11 = i1.ɵnov(_v, 89).ngClassPristine; var currVal_12 = i1.ɵnov(_v, 89).ngClassDirty; var currVal_13 = i1.ɵnov(_v, 89).ngClassValid; var currVal_14 = i1.ɵnov(_v, 89).ngClassInvalid; var currVal_15 = i1.ɵnov(_v, 89).ngClassPending; _ck(_v, 80, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_21 = i1.ɵnov(_v, 103).ngClassUntouched; var currVal_22 = i1.ɵnov(_v, 103).ngClassTouched; var currVal_23 = i1.ɵnov(_v, 103).ngClassPristine; var currVal_24 = i1.ɵnov(_v, 103).ngClassDirty; var currVal_25 = i1.ɵnov(_v, 103).ngClassValid; var currVal_26 = i1.ɵnov(_v, 103).ngClassInvalid; var currVal_27 = i1.ɵnov(_v, 103).ngClassPending; _ck(_v, 96, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_32 = (i1.ɵnov(_v, 114).pattern ? i1.ɵnov(_v, 114).pattern : null); var currVal_33 = i1.ɵnov(_v, 119).ngClassUntouched; var currVal_34 = i1.ɵnov(_v, 119).ngClassTouched; var currVal_35 = i1.ɵnov(_v, 119).ngClassPristine; var currVal_36 = i1.ɵnov(_v, 119).ngClassDirty; var currVal_37 = i1.ɵnov(_v, 119).ngClassValid; var currVal_38 = i1.ɵnov(_v, 119).ngClassInvalid; var currVal_39 = i1.ɵnov(_v, 119).ngClassPending; _ck(_v, 110, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_45 = (i1.ɵnov(_v, 130).pattern ? i1.ɵnov(_v, 130).pattern : null); var currVal_46 = i1.ɵnov(_v, 135).ngClassUntouched; var currVal_47 = i1.ɵnov(_v, 135).ngClassTouched; var currVal_48 = i1.ɵnov(_v, 135).ngClassPristine; var currVal_49 = i1.ɵnov(_v, 135).ngClassDirty; var currVal_50 = i1.ɵnov(_v, 135).ngClassValid; var currVal_51 = i1.ɵnov(_v, 135).ngClassInvalid; var currVal_52 = i1.ɵnov(_v, 135).ngClassPending; _ck(_v, 126, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52); var currVal_58 = i1.ɵnov(_v, 147).ngClassUntouched; var currVal_59 = i1.ɵnov(_v, 147).ngClassTouched; var currVal_60 = i1.ɵnov(_v, 147).ngClassPristine; var currVal_61 = i1.ɵnov(_v, 147).ngClassDirty; var currVal_62 = i1.ɵnov(_v, 147).ngClassValid; var currVal_63 = i1.ɵnov(_v, 147).ngClassInvalid; var currVal_64 = i1.ɵnov(_v, 147).ngClassPending; _ck(_v, 142, 0, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64); var currVal_66 = i1.ɵnov(_v, 203).ngClassUntouched; var currVal_67 = i1.ɵnov(_v, 203).ngClassTouched; var currVal_68 = i1.ɵnov(_v, 203).ngClassPristine; var currVal_69 = i1.ɵnov(_v, 203).ngClassDirty; var currVal_70 = i1.ɵnov(_v, 203).ngClassValid; var currVal_71 = i1.ɵnov(_v, 203).ngClassInvalid; var currVal_72 = i1.ɵnov(_v, 203).ngClassPending; _ck(_v, 199, 0, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72); var currVal_74 = (i1.ɵnov(_v, 210).pattern ? i1.ɵnov(_v, 210).pattern : null); var currVal_75 = i1.ɵnov(_v, 215).ngClassUntouched; var currVal_76 = i1.ɵnov(_v, 215).ngClassTouched; var currVal_77 = i1.ɵnov(_v, 215).ngClassPristine; var currVal_78 = i1.ɵnov(_v, 215).ngClassDirty; var currVal_79 = i1.ɵnov(_v, 215).ngClassValid; var currVal_80 = i1.ɵnov(_v, 215).ngClassInvalid; var currVal_81 = i1.ɵnov(_v, 215).ngClassPending; _ck(_v, 206, 0, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81); var currVal_87 = i1.ɵnov(_v, 229).ngClassUntouched; var currVal_88 = i1.ɵnov(_v, 229).ngClassTouched; var currVal_89 = i1.ɵnov(_v, 229).ngClassPristine; var currVal_90 = i1.ɵnov(_v, 229).ngClassDirty; var currVal_91 = i1.ɵnov(_v, 229).ngClassValid; var currVal_92 = i1.ɵnov(_v, 229).ngClassInvalid; var currVal_93 = i1.ɵnov(_v, 229).ngClassPending; _ck(_v, 222, 0, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93); var currVal_98 = (i1.ɵnov(_v, 240).pattern ? i1.ɵnov(_v, 240).pattern : null); var currVal_99 = i1.ɵnov(_v, 245).ngClassUntouched; var currVal_100 = i1.ɵnov(_v, 245).ngClassTouched; var currVal_101 = i1.ɵnov(_v, 245).ngClassPristine; var currVal_102 = i1.ɵnov(_v, 245).ngClassDirty; var currVal_103 = i1.ɵnov(_v, 245).ngClassValid; var currVal_104 = i1.ɵnov(_v, 245).ngClassInvalid; var currVal_105 = i1.ɵnov(_v, 245).ngClassPending; _ck(_v, 236, 0, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105); var currVal_111 = (i1.ɵnov(_v, 256).pattern ? i1.ɵnov(_v, 256).pattern : null); var currVal_112 = i1.ɵnov(_v, 261).ngClassUntouched; var currVal_113 = i1.ɵnov(_v, 261).ngClassTouched; var currVal_114 = i1.ɵnov(_v, 261).ngClassPristine; var currVal_115 = i1.ɵnov(_v, 261).ngClassDirty; var currVal_116 = i1.ɵnov(_v, 261).ngClassValid; var currVal_117 = i1.ɵnov(_v, 261).ngClassInvalid; var currVal_118 = i1.ɵnov(_v, 261).ngClassPending; _ck(_v, 252, 0, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118); var currVal_124 = i1.ɵnov(_v, 273).ngClassUntouched; var currVal_125 = i1.ɵnov(_v, 273).ngClassTouched; var currVal_126 = i1.ɵnov(_v, 273).ngClassPristine; var currVal_127 = i1.ɵnov(_v, 273).ngClassDirty; var currVal_128 = i1.ɵnov(_v, 273).ngClassValid; var currVal_129 = i1.ɵnov(_v, 273).ngClassInvalid; var currVal_130 = i1.ɵnov(_v, 273).ngClassPending; _ck(_v, 268, 0, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130); var currVal_132 = i1.ɵnov(_v, 325).ngClassUntouched; var currVal_133 = i1.ɵnov(_v, 325).ngClassTouched; var currVal_134 = i1.ɵnov(_v, 325).ngClassPristine; var currVal_135 = i1.ɵnov(_v, 325).ngClassDirty; var currVal_136 = i1.ɵnov(_v, 325).ngClassValid; var currVal_137 = i1.ɵnov(_v, 325).ngClassInvalid; var currVal_138 = i1.ɵnov(_v, 325).ngClassPending; _ck(_v, 321, 0, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138); var currVal_140 = (i1.ɵnov(_v, 332).pattern ? i1.ɵnov(_v, 332).pattern : null); var currVal_141 = i1.ɵnov(_v, 337).ngClassUntouched; var currVal_142 = i1.ɵnov(_v, 337).ngClassTouched; var currVal_143 = i1.ɵnov(_v, 337).ngClassPristine; var currVal_144 = i1.ɵnov(_v, 337).ngClassDirty; var currVal_145 = i1.ɵnov(_v, 337).ngClassValid; var currVal_146 = i1.ɵnov(_v, 337).ngClassInvalid; var currVal_147 = i1.ɵnov(_v, 337).ngClassPending; _ck(_v, 328, 0, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147); var currVal_153 = i1.ɵnov(_v, 351).ngClassUntouched; var currVal_154 = i1.ɵnov(_v, 351).ngClassTouched; var currVal_155 = i1.ɵnov(_v, 351).ngClassPristine; var currVal_156 = i1.ɵnov(_v, 351).ngClassDirty; var currVal_157 = i1.ɵnov(_v, 351).ngClassValid; var currVal_158 = i1.ɵnov(_v, 351).ngClassInvalid; var currVal_159 = i1.ɵnov(_v, 351).ngClassPending; _ck(_v, 344, 0, currVal_153, currVal_154, currVal_155, currVal_156, currVal_157, currVal_158, currVal_159); var currVal_164 = (i1.ɵnov(_v, 362).pattern ? i1.ɵnov(_v, 362).pattern : null); var currVal_165 = i1.ɵnov(_v, 367).ngClassUntouched; var currVal_166 = i1.ɵnov(_v, 367).ngClassTouched; var currVal_167 = i1.ɵnov(_v, 367).ngClassPristine; var currVal_168 = i1.ɵnov(_v, 367).ngClassDirty; var currVal_169 = i1.ɵnov(_v, 367).ngClassValid; var currVal_170 = i1.ɵnov(_v, 367).ngClassInvalid; var currVal_171 = i1.ɵnov(_v, 367).ngClassPending; _ck(_v, 358, 0, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171); var currVal_177 = (i1.ɵnov(_v, 378).pattern ? i1.ɵnov(_v, 378).pattern : null); var currVal_178 = i1.ɵnov(_v, 383).ngClassUntouched; var currVal_179 = i1.ɵnov(_v, 383).ngClassTouched; var currVal_180 = i1.ɵnov(_v, 383).ngClassPristine; var currVal_181 = i1.ɵnov(_v, 383).ngClassDirty; var currVal_182 = i1.ɵnov(_v, 383).ngClassValid; var currVal_183 = i1.ɵnov(_v, 383).ngClassInvalid; var currVal_184 = i1.ɵnov(_v, 383).ngClassPending; _ck(_v, 374, 0, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181, currVal_182, currVal_183, currVal_184); var currVal_190 = i1.ɵnov(_v, 395).ngClassUntouched; var currVal_191 = i1.ɵnov(_v, 395).ngClassTouched; var currVal_192 = i1.ɵnov(_v, 395).ngClassPristine; var currVal_193 = i1.ɵnov(_v, 395).ngClassDirty; var currVal_194 = i1.ɵnov(_v, 395).ngClassValid; var currVal_195 = i1.ɵnov(_v, 395).ngClassInvalid; var currVal_196 = i1.ɵnov(_v, 395).ngClassPending; _ck(_v, 390, 0, currVal_190, currVal_191, currVal_192, currVal_193, currVal_194, currVal_195, currVal_196); }); }
exports.View_PriceComponent_0 = View_PriceComponent_0;
function View_PriceComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-price", [], null, null, null, View_PriceComponent_0, RenderType_PriceComponent)), i1.ɵdid(1, 114688, null, 0, i4.PriceComponent, [i3.FormBuilder, i5.PriceService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_PriceComponent_Host_0 = View_PriceComponent_Host_0;
var PriceComponentNgFactory = i1.ɵccf("app-price", i4.PriceComponent, View_PriceComponent_Host_0, {}, {}, []);
exports.PriceComponentNgFactory = PriceComponentNgFactory;


/***/ }),

/***/ "./src/app/price/price.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/price/price.component.scss.shim.ngstyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".price_content[_ngcontent-%COMP%] {\n  font-family: myFirstFont;\n  padding: 40px 0 40px 0;\n  background: #fff; }\n\n.heading_line[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  text-align: center;\n   }\n\n.heading_line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fa7606;\n    font-size: 30px;\n    margin-bottom: 1rem; }\n\n.para_line[_ngcontent-%COMP%] {\n  font-size: 18px; }\n\n.sub-heading_line[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 20px; }\n\n.sub-heading_line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #fa7606;\n    font-size: 24px;\n    margin-bottom: 1rem; }\n\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0; }\n\n.head_pri[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff; }\n\n.semi-head_pri[_ngcontent-%COMP%] {\n  font-size: 28px; }\n\n.standard_plan[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px; }\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.75rem; }\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: .75rem 1.25rem;\n  background-color: #fff;\n  border-top: 0px; }\n\n.card-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px; }\n\n.client[_ngcontent-%COMP%] {\n  transition: all 0.1s; }\n\n.client[_ngcontent-%COMP%]:hover {\n    -webkit-transform: scale(1.1, 1.1);\n    transform: scale(1.1, 1.1);\n    box-shadow: 10px 10px 91px 0px #ffa6a9;\n    z-index: 9999;\n    border-right: 1px solid transparent;\n    border-bottom: 1px solid transparent;\n    cursor: pointer;\n    background-color: #fff; }\n\n.clearer[_ngcontent-%COMP%] {\n  clear: both; }\n\n.mb-5[_ngcontent-%COMP%] {\n  margin-top: 25px !important;\n  margin-bottom: 0 !important; }\n\n.form-control-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  padding: 7px 0 0 0;\n  transition: all 200ms;\n  opacity: 0; }\n\n.form-control[_ngcontent-%COMP%]:focus    + .form-control-placeholder[_ngcontent-%COMP%] {\n  font-size: 85%;\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n  opacity: 1; }\n\n.form-control[_ngcontent-%COMP%]:valid    + .form-control-placeholder[_ngcontent-%COMP%] {\n  font-size: 85%;\n  -webkit-transform: translate3d(0, -100%, 0);\n          transform: translate3d(0, -100%, 0);\n  opacity: 1; }\n\n.form-control[_ngcontent-%COMP%]:invalid {\n  background-image: none !important; }\n\n.modal-dialog.modal-notify[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 0px;\n  color: #616161; }\n\n.modal-content[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 0px 8px 8px 24px;\n  border-top: 0; }\n\nform[_ngcontent-%COMP%] {\n  margin-bottom: 0.125rem; }\n\n.standard_head[_ngcontent-%COMP%] {\n  background: #4caf50 !important; }\n\n.standard_icon[_ngcontent-%COMP%] {\n  color: #4caf50 !important; }\n\n.enter_head[_ngcontent-%COMP%] {\n  background: #03a9f4 !important; }\n\n.enter_icon[_ngcontent-%COMP%] {\n  color: #03a9f4 !important; }\n\n.modal-success[_ngcontent-%COMP%]   .fa-paper-plane-o[_ngcontent-%COMP%] {\n  color: #fff !important; }\n\n.modal-success[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0rem;\n  margin-top: 10px; }\n\n.modal-success[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    box-shadow: 0 1px 0 0 #4caf50;\n    border-bottom: 1px solid #4caf50; }\n\n.modal-success[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #4caf50; }\n\n.modal-success[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #4caf50; }\n\n.modal-success[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #4caf50; }\n\n.modal-success[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   textarea.md-textarea[_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #4caf50; }\n\n.modal-success[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background: #4caf50 !important;\n  color: #fff; }\n\n.modal-success[_ngcontent-%COMP%]   .plan_price[_ngcontent-%COMP%] {\n  font-size: 35px;\n  padding-top: 8px;\n  font-weight: 700;\n  color: #4caf50; }\n\n.modal-default[_ngcontent-%COMP%]   .fa-paper-plane-o[_ngcontent-%COMP%] {\n  color: #fff !important; }\n\n.modal-default[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  background: #880e4f !important; }\n\n.modal-default[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0rem;\n  margin-top: 10px; }\n\n.modal-default[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    box-shadow: 0 1px 0 0 #880e4f !important;\n    border-bottom: 1px solid #880e4f !important; }\n\n.modal-default[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #880e4f !important; }\n\n.modal-default[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #880e4f !important; }\n\n.modal-default[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #880e4f !important; }\n\n.modal-default[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   textarea.md-textarea[_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #880e4f !important; }\n\n.modal-default[_ngcontent-%COMP%]   .plan_price[_ngcontent-%COMP%] {\n  font-size: 35px;\n  padding-top: 8px;\n  font-weight: 700;\n  color: #880e4f !important; }\n\n.modal-default[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background: #880e4f !important;\n  color: #fff; }\n\n.modal-default[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  color: #880e4f !important; }\n\n.modal-info[_ngcontent-%COMP%]   .fa-paper-plane-o[_ngcontent-%COMP%] {\n  color: #fff !important; }\n\n.modal-info[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0rem;\n  margin-top: 10px; }\n\n.modal-info[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    box-shadow: 0 1px 0 0 #03a9f4 !important;\n    border-bottom: 1px solid #03a9f4 !important; }\n\n.modal-info[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #03a9f4 !important; }\n\n.modal-info[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #03a9f4 !important; }\n\n.modal-info[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #03a9f4 !important; }\n\n.modal-info[_ngcontent-%COMP%]   .md-form[_ngcontent-%COMP%]   textarea.md-textarea[_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\n    color: #03a9f4 !important; }\n\n.modal-info[_ngcontent-%COMP%]   .btn-default[_ngcontent-%COMP%] {\n  background: #03a9f4 !important;\n  color: #fff; }\n\n.modal-info[_ngcontent-%COMP%]   .plan_price[_ngcontent-%COMP%] {\n  font-size: 35px;\n  padding-top: 8px;\n  font-weight: 700;\n  color: #03a9f4 !important; }\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 5px 20px 5px; }\n\n.bg-light[_ngcontent-%COMP%] {\n  background: #880e4f !important; }\n\n\n\n.alert-danger[_ngcontent-%COMP%] {\n  background-color: transparent; }\n\n.alert[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 35px;\n  margin-bottom: 0; }\n\n.validate[_ngcontent-%COMP%] {\n  margin-bottom: 0; }\n\n.alert-danger[_ngcontent-%COMP%] {\n  color: red !important; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var price_service_1 = __webpack_require__(/*! ./price.service */ "./src/app/price/price.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "@angular/forms");
var PriceComponent = /** @class */ (function () {
    function PriceComponent(fb, priceService) {
        this.fb = fb;
        this.priceService = priceService;
        this.submitted = false;
    }
    PriceComponent.prototype.ngOnInit = function () {
        this.priceForm = this.fb.group({
            stanname: ['', forms_1.Validators.required],
            stanschool: ['', forms_1.Validators.required],
            stanemail: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            stancontact: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
            stanmessage: ['']
        });
        this.priceForm2 = this.fb.group({
            proname: ['', forms_1.Validators.required],
            proschool: ['', forms_1.Validators.required],
            proemail: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            procontact: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
            promessage: ['']
        });
        this.priceForm3 = this.fb.group({
            entername: ['', forms_1.Validators.required],
            enterschool: ['', forms_1.Validators.required],
            enteremail: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            entercontact: ['', [forms_1.Validators.required]],
            entermessage: ['']
        });
    };
    Object.defineProperty(PriceComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            //console.log(this.priceForm.controls);
            return this.priceForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriceComponent.prototype, "g", {
        // convenience getter for easy access to form fields
        get: function () {
            //console.log(this.priceForm.controls);
            return this.priceForm2.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriceComponent.prototype, "i", {
        // convenience getter for easy access to form fields
        get: function () {
            //console.log(this.priceForm.controls);
            return this.priceForm3.controls;
        },
        enumerable: true,
        configurable: true
    });
    PriceComponent.prototype.sendMail = function (stanname, stanschool, stanemail, stancontact, stanmessage) {
        this.submitted = true;
        if (this.priceForm.valid) {
            this.priceService.sendEmail(stanname, stanschool, stanemail, stancontact, stanmessage).subscribe(function (success) {
                console.log('Your data is succesfully submitted');
                console.log(success);
            }, function (error) {
                console.log('Something went wrong');
            });
            alert('Your data is successfully transmited!! :-)');
            location.reload();
        }
        else {
            return;
        }
    };
    PriceComponent.prototype.sendMail2 = function (proname, proschool, proemail, procontact, promessage) {
        this.submitted = true;
        if (this.priceForm2.valid) {
            this.priceService.sendEmail2(proname, proschool, proemail, procontact, promessage).subscribe(function (success) {
                console.log('Your data is succesfully submitted');
                console.log(success);
            }, function (error) {
                console.log('Something went wrong');
            });
            alert('Your data is succesfully submitted!! :-)');
            location.reload();
        }
        else {
            return;
        }
        ;
    };
    PriceComponent.prototype.sendMail3 = function (entername, enterschool, enteremail, entercontact, entermessage) {
        this.submitted = true;
        if (this.priceForm3.valid) {
            this.priceService.sendEmail3(entername, enterschool, enteremail, entercontact, entermessage).subscribe(function (success) {
                console.log('Your data is succesfully submitted');
                console.log(success);
            }, function (error) {
                console.log('Something went wrong');
            });
            alert('Your data is succesfully submitted!! :-)');
            location.reload();
        }
        else {
            return;
        }
    };
    return PriceComponent;
}());
exports.PriceComponent = PriceComponent;


/***/ }),

/***/ "./src/app/price/price.service.ts":
/*!****************************************!*\
  !*** ./src/app/price/price.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var http_2 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/http */ "@angular/http");
var httpOptions = {
    headers: new http_2.HttpHeaders({ 'Content-Type': 'application/json' })
};
var apiUrl = 'pricing';
var PriceService = /** @class */ (function () {
    function PriceService(http) {
        this.http = http;
        this.sendEmailUrl = '/send_detail';
        this.sendEmail2Url = '/send_detail2';
        this.sendEmail3Url = '/send_detail3';
    }
    PriceService.prototype.sendEmail = function (stanname, stanschool, stanemail, stancontact, stanmessage) {
        var uri = "" + (apiUrl + this.sendEmailUrl);
        var obj = {
            stanname: stanname,
            stanschool: stanschool,
            stanemail: stanemail,
            stancontact: stancontact,
            stanmessage: stanmessage
        };
        return this.http.post(uri, obj);
    };
    PriceService.prototype.sendEmail2 = function (proname, proschool, proemail, procontact, promessage) {
        var uri = "" + (apiUrl + this.sendEmail2Url);
        var obj = {
            proname: proname,
            proschool: proschool,
            proemail: proemail,
            procontact: procontact,
            promessage: promessage
        };
        return this.http.post(uri, obj);
    };
    PriceService.prototype.sendEmail3 = function (entername, enterschool, enteremail, entercontact, entermessage) {
        var uri = "" + (apiUrl + this.sendEmail3Url);
        var obj = {
            entername: entername,
            enterschool: enterschool,
            enteremail: enteremail,
            entercontact: entercontact,
            entermessage: entermessage
        };
        return this.http.post(uri, obj);
    };
    PriceService.ngInjectableDef = i0.defineInjectable({ factory: function PriceService_Factory() { return new PriceService(i0.inject(i1.Http)); }, token: PriceService, providedIn: "root" });
    return PriceService;
}());
exports.PriceService = PriceService;


/***/ }),

/***/ "./src/app/product/product.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/product/product.component.ngfactory.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./product.component.scss.shim.ngstyle */ "./src/app/product/product.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./product.component */ "./src/app/product/product.component.ts");
var styles_ProductComponent = [i0.styles];
var RenderType_ProductComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_ProductComponent, data: {} });
exports.RenderType_ProductComponent = RenderType_ProductComponent;
function View_ProductComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "head", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "title", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Exam, Result, Payroll & Transport Management India | School Management Software | E-Saraswati"])), (_l()(), i1.ɵeld(3, 0, null, null, 0, "meta", [["content", "Looking for all-in-one school management software in India? E-Saraswati is the most advanced school software that consists of all the core modules including exam management, result management, payroll management, transport management, inventory management & more. Check out now!"], ["name", "description"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 0, null, null, 0, "meta", [["content", "Class Management Software, School Library Management System, School Inventory Management System, School Transport Management System, School Financial Management Software, Library Management Software India, School Payroll Management System, School Inventory Management Software, School Exam Management Software, School Transport Management Software, School Result Management Software, School Payroll Management Software In India, School Inventory Management Software In India, School Transport Management Software In India"], ["name", "keywords"]], null, null, null, null, null)), (_l()(), i1.ɵeld(5, 0, null, null, 0, "meta", [["content", "!"], ["name", "fragment"]], null, null, null, null, null)), (_l()(), i1.ɵeld(6, 0, null, null, 0, "link", [["href", "http://e-saraswati.org/product"], ["rel", "canonical"]], null, null, null, null, null)), (_l()(), i1.ɵeld(7, 0, null, null, 305, "div", [["class", "product_content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 0, null, null, 304, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), i1.ɵeld(9, 0, null, null, 303, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(10, 0, null, null, 302, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), i1.ɵeld(11, 0, null, null, 2, "div", [["class", "heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(12, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Why E-SARASWATI?"])), (_l()(), i1.ɵeld(14, 0, null, null, 2, "div", [["class", "para_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["To manage school operations effectively it demands a proper helping hand and when it is management software, it becomes quite easy to handle different operations seamlessly. We understand this need of educational institutions and thus presenting E-SARASWATI, school management system, to provide your educational business a tremendous growth in India."])), (_l()(), i1.ɵeld(17, 0, null, null, 2, "div", [["class", "sub-heading_line"]], null, null, null, null, null)), (_l()(), i1.ɵeld(18, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["E-SARASWATI School Management Software Modules"])), (_l()(), i1.ɵeld(20, 0, null, null, 79, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(21, 0, null, null, 26, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(22, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(23, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(24, 0, null, null, 0, "img", [["alt", "student management software India"], ["src", "assets/images/student-management.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(25, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(26, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Under student management module you can manage students of the different class. With Student management module, bulk storage data....."])), (_l()(), i1.ɵeld(28, 0, null, null, 0, "a", [["data-target", "#myModal_1"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(29, 0, null, null, 18, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Student Management"])), (_l()(), i1.ɵeld(32, 0, null, null, 15, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(33, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_1"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(35, 0, null, null, 12, "div", [["class", "modal fade"], ["id", "myModal_1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 11, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(37, 0, null, null, 10, "div", [["class", "modal-content content_1"]], null, null, null, null, null)), (_l()(), i1.ɵeld(38, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(39, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(41, 0, null, null, 6, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(42, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["STUDENT MANAGEMENT"])), (_l()(), i1.ɵeld(44, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Under student management module you can manage students of the different class. With Student management module, bulk storage data of students can be managed with ease and efficiency. Students can view their profile under Timeline, homework, and assignments assigned by the admin or teacher, they can see notifications under noticeboard, gallery, calendar, messages, and fees to be submitted."])), (_l()(), i1.ɵeld(46, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The student\u2019s record throughout the years or year wise can be stored and managed properly. This module, in turn, helps to keep a record of the ultimate progress of students academically and non-academically. The timeline of the student works as a footmark of the student."])), (_l()(), i1.ɵeld(48, 0, null, null, 24, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(49, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(50, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 0, "img", [["alt", "class management software India"], ["src", "assets/images/class-management.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(52, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(53, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Under class management module admin can create and manage classes from 1st to 12th and teachers can handle classes created by admin....."])), (_l()(), i1.ɵeld(55, 0, null, null, 0, "a", [["data-target", "#myModal_2"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(56, 0, null, null, 16, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(57, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Class Management"])), (_l()(), i1.ɵeld(59, 0, null, null, 13, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(60, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_2"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(62, 0, null, null, 10, "div", [["class", "modal fade"], ["id", "myModal_2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(63, 0, null, null, 9, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 8, "div", [["class", "modal-content content_2"]], null, null, null, null, null)), (_l()(), i1.ɵeld(65, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(66, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(68, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(69, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CLASS MANAGEMENT"])), (_l()(), i1.ɵeld(71, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Under class management module admin can create and manage classes from 1st to 12th and teachers can handle classes created by admin. With the help of this module admin allots different classes to different teachers according to the subjects they are assigned to teach on the basis of their qualification. "])), (_l()(), i1.ɵeld(73, 0, null, null, 26, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(74, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(75, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(76, 0, null, null, 0, "img", [["alt", "exam management software India"], ["src", "assets/images/exam-management.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(77, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(78, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Exam Management is not an easy task. Exam management module helps in the best way to make this process easy. This module allows....."])), (_l()(), i1.ɵeld(80, 0, null, null, 0, "a", [["data-target", "#myModal_3"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(81, 0, null, null, 18, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(82, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Circular / Exam Management"])), (_l()(), i1.ɵeld(84, 0, null, null, 15, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(85, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_3"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(87, 0, null, null, 12, "div", [["class", "modal fade"], ["id", "myModal_3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(88, 0, null, null, 11, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(89, 0, null, null, 10, "div", [["class", "modal-content content_3"]], null, null, null, null, null)), (_l()(), i1.ɵeld(90, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(91, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(93, 0, null, null, 6, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(94, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["CIRCULAR/EXAM MANAGEMENT"])), (_l()(), i1.ɵeld(96, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Exam Management is not an easy task. Exam management module helps in the best way to make this process easy. This module allows you to efficiently manage multiple tasks associated with exam management like enrollments, examination forms, exam planning, and question paper creation, scheduling, conducting and evaluating exams."])), (_l()(), i1.ɵeld(98, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["This module makes the examination process easier and simpler."])), (_l()(), i1.ɵeld(100, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(101, 0, null, null, 79, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(102, 0, null, null, 26, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(103, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(104, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(105, 0, null, null, 0, "img", [["alt", "school time table management software India"], ["src", "assets/images/homework-management.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(106, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(107, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Home Work / Time Table Management is efficient and best to manage timetables. This module aids you to manage and organize timetable of different exams efficiently....."])), (_l()(), i1.ɵeld(109, 0, null, null, 0, "a", [["data-target", "#myModal_4"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(110, 0, null, null, 18, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(111, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Home Work / Time Table Management"])), (_l()(), i1.ɵeld(113, 0, null, null, 15, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(114, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_4"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(116, 0, null, null, 12, "div", [["class", "modal fade"], ["id", "myModal_4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(117, 0, null, null, 11, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(118, 0, null, null, 10, "div", [["class", "modal-content content_4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(119, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(120, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(122, 0, null, null, 6, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(123, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["HOMEWORK/TIMETABLE MANAGEMENT"])), (_l()(), i1.ɵeld(125, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Home Work / Time Table Management module is efficient and best to manage timetables. This module aids you to manage and organize timetable of different exams efficiently. It helps you to manage the scheduling of timetable in synchronization with class strength and composition, individual teacher and subject information."])), (_l()(), i1.ɵeld(127, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["It generates the timetable of both teachers as well as students. It also helps efficiently in assigning the homework and assignments to the students."])), (_l()(), i1.ɵeld(129, 0, null, null, 24, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(130, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(131, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(132, 0, null, null, 0, "img", [["alt", "school result management erp India"], ["src", "assets/images/result-management.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(133, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(134, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Our Result Management module manages all the tasks associated with the results. It helps to manage the results of different classes and branches of....."])), (_l()(), i1.ɵeld(136, 0, null, null, 0, "a", [["data-target", "#myModal_5"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(137, 0, null, null, 16, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(138, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Result Management"])), (_l()(), i1.ɵeld(140, 0, null, null, 13, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(141, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_5"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(143, 0, null, null, 10, "div", [["class", "modal fade"], ["id", "myModal_5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(144, 0, null, null, 9, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(145, 0, null, null, 8, "div", [["class", "modal-content content_5"]], null, null, null, null, null)), (_l()(), i1.ɵeld(146, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(147, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(149, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(150, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["RESULT MANAGEMENT"])), (_l()(), i1.ɵeld(152, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Our Result Management module manages all the tasks associated with the results. It helps to manage the results of different classes and branches of schools effectively according to different subjects and classes. It gives you the complete control above result processing of the students thereby calculating total mark and percentage and creating mark sheet lines and results instantly."])), (_l()(), i1.ɵeld(154, 0, null, null, 26, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(155, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(156, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(157, 0, null, null, 0, "img", [["alt", "school shift management software India"], ["src", "assets/images/shift-management1.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(158, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(159, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["It is the best management module for those schools and institutes which runs on the shift basis. With this module, you can efficiently manage the different....."])), (_l()(), i1.ɵeld(161, 0, null, null, 0, "a", [["data-target", "#myModal_6"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(162, 0, null, null, 18, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(163, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Shift & Promote Management"])), (_l()(), i1.ɵeld(165, 0, null, null, 15, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(166, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_6"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(168, 0, null, null, 12, "div", [["class", "modal fade"], ["id", "myModal_6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(169, 0, null, null, 11, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(170, 0, null, null, 10, "div", [["class", "modal-content content_6"]], null, null, null, null, null)), (_l()(), i1.ɵeld(171, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(172, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(174, 0, null, null, 6, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(175, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["SHIFT AND PROMOTE MANAGEMENT"])), (_l()(), i1.ɵeld(177, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["It is the best module for those schools and institutes which runs on a shift basis. With this module, you can easily manage the different shifts of your school or institution, thereby assigning teachers the subjects and courses in various shifts."])), (_l()(), i1.ɵeld(179, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Along with that, it works efficiently in promoting students, which merely means that with every progressing class you need not update the details of students instead it will automatically do it for you. "])), (_l()(), i1.ɵeld(181, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(182, 0, null, null, 75, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(183, 0, null, null, 24, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(184, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(185, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(186, 0, null, null, 0, "img", [["alt", "school inventory management software India"], ["src", "assets/images/inventory-managemnt.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(187, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(188, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The inventory management module helps associate your tasks easily with the management of inventories. With the help of this module, you can efficiently....."])), (_l()(), i1.ɵeld(190, 0, null, null, 0, "a", [["data-target", "#myModal_7"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(191, 0, null, null, 16, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(192, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Inventory Management"])), (_l()(), i1.ɵeld(194, 0, null, null, 13, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(195, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_7"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(197, 0, null, null, 10, "div", [["class", "modal fade"], ["id", "myModal_7"]], null, null, null, null, null)), (_l()(), i1.ɵeld(198, 0, null, null, 9, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(199, 0, null, null, 8, "div", [["class", "modal-content content_7"]], null, null, null, null, null)), (_l()(), i1.ɵeld(200, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(201, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(203, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(204, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["INVENTORY MANAGEMENT"])), (_l()(), i1.ɵeld(206, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The inventory management module helps associate your tasks easily with the management of inventories. With the help of this module, you can efficiently manage inventories of school like goods categories (blackboard, chalk, duster, etc.), along with that also can efficiently handle suppliers purchase orders, item location, and creating intents."])), (_l()(), i1.ɵeld(208, 0, null, null, 24, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(209, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(210, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(211, 0, null, null, 0, "img", [["alt", "school transport management erp India"], ["src", "assets/images/transport-management.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(212, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(213, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Transport management module helps to manage the transport activities associated with school efficiently. It means that it helps you to manage to track and....."])), (_l()(), i1.ɵeld(215, 0, null, null, 0, "a", [["data-target", "#myModal_8"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(216, 0, null, null, 16, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(217, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Transport Management"])), (_l()(), i1.ɵeld(219, 0, null, null, 13, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(220, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_8"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(222, 0, null, null, 10, "div", [["class", "modal fade"], ["id", "myModal_8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(223, 0, null, null, 9, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(224, 0, null, null, 8, "div", [["class", "modal-content content_8"]], null, null, null, null, null)), (_l()(), i1.ɵeld(225, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(226, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(228, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(229, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TRANSPORT MANAGEMENT"])), (_l()(), i1.ɵeld(231, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Transport management module helps manage the transport activities associated with school efficiently. It means that it helps you to track and maintain the details of transportation like route details, transportation fees, vehicle name, number and more, which creates easiness in keeping details regarding transportation data also transport fee collection."])), (_l()(), i1.ɵeld(233, 0, null, null, 24, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(234, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(235, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(236, 0, null, null, 0, "img", [["alt", "school payroll  erp India"], ["src", "assets/images/payroll-management.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(237, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(238, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Manually paying or keeping the record of payment to employees or teachers of school is a tiresome task with the help of this Payroll management module....."])), (_l()(), i1.ɵeld(240, 0, null, null, 0, "a", [["data-target", "#myModal_9"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(241, 0, null, null, 16, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(242, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Payroll Management"])), (_l()(), i1.ɵeld(244, 0, null, null, 13, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(245, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_9"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(247, 0, null, null, 10, "div", [["class", "modal fade"], ["id", "myModal_9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(248, 0, null, null, 9, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(249, 0, null, null, 8, "div", [["class", "modal-content content_9"]], null, null, null, null, null)), (_l()(), i1.ɵeld(250, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(251, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(253, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(254, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["PAYROLL MANAGEMENT"])), (_l()(), i1.ɵeld(256, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Manually paying or keeping the record of payment to employees or teachers of the school is a tiresome task with the help of this Payroll management module, you can manage the process of payroll in any trouble. You can maintain the record of salaries of different teachers and other employees of the institution or school and can pay them according to their assigned work priorities. "])), (_l()(), i1.ɵeld(258, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵeld(259, 0, null, null, 53, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), i1.ɵeld(260, 0, null, null, 24, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(261, 0, null, null, 23, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(262, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(263, 0, null, null, 0, "img", [["alt", "school finance management software India"], ["src", "assets/images/financial-managemnt.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(264, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(265, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Finance Management module helps you to manage all the tasks associated with finance of the school or institution efficiently. With this finance management....."])), (_l()(), i1.ɵeld(267, 0, null, null, 0, "a", [["data-target", "#myModal_10"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(268, 0, null, null, 16, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(269, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Finance Management"])), (_l()(), i1.ɵeld(271, 0, null, null, 13, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(272, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_10"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(274, 0, null, null, 10, "div", [["class", "modal fade"], ["id", "myModal_10"]], null, null, null, null, null)), (_l()(), i1.ɵeld(275, 0, null, null, 9, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(276, 0, null, null, 8, "div", [["class", "modal-content content_10"]], null, null, null, null, null)), (_l()(), i1.ɵeld(277, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(278, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(280, 0, null, null, 4, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(281, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["FINANCE MANAGEMENT"])), (_l()(), i1.ɵeld(283, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Finance Management module helps you to manage all the tasks associated with finance of the school or institution efficiently. With this finance management module, you can keep track of incoming amount, outgoing amount or income invested in expense and at the same time budget control, accounts, management reporting, etc."])), (_l()(), i1.ɵeld(285, 0, null, null, 26, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), i1.ɵeld(286, 0, null, null, 25, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), i1.ɵeld(287, 0, null, null, 5, "figure", [["class", "snip1401"]], null, null, null, null, null)), (_l()(), i1.ɵeld(288, 0, null, null, 0, "img", [["alt", "school library erp India"], ["src", "assets/images/library-management.jpg"]], null, null, null, null, null)), (_l()(), i1.ɵeld(289, 0, null, null, 2, "figcaption", [], null, null, null, null, null)), (_l()(), i1.ɵeld(290, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Library Management module works effectively in managing the tasks associated with the library. With its help, you can handle the library of your school....."])), (_l()(), i1.ɵeld(292, 0, null, null, 0, "a", [["data-target", "#myModal_11"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵeld(293, 0, null, null, 18, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(294, 0, null, null, 1, "h3", [["class", "card-title"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Library Management"])), (_l()(), i1.ɵeld(296, 0, null, null, 15, "div", [["class", "read-btn"]], null, null, null, null, null)), (_l()(), i1.ɵeld(297, 0, null, null, 1, "a", [["class", "btn btn-sm read_more"], ["data-target", "#myModal_11"], ["data-toggle", "modal"], ["href", "#"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["READ MORE"])), (_l()(), i1.ɵeld(299, 0, null, null, 12, "div", [["class", "modal fade"], ["id", "myModal_11"]], null, null, null, null, null)), (_l()(), i1.ɵeld(300, 0, null, null, 11, "div", [["class", "modal-dialog modal-dialog-centered"]], null, null, null, null, null)), (_l()(), i1.ɵeld(301, 0, null, null, 10, "div", [["class", "modal-content content_11"]], null, null, null, null, null)), (_l()(), i1.ɵeld(302, 0, null, null, 2, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), i1.ɵeld(303, 0, null, null, 1, "button", [["class", "close"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\u00D7"])), (_l()(), i1.ɵeld(305, 0, null, null, 6, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), i1.ɵeld(306, 0, null, null, 1, "h4", [["class", "modal-title text-center"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["LIBRARY MANAGEMENT"])), (_l()(), i1.ɵeld(308, 0, null, null, 1, "p", [["class", "modal-para"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Library Management module works effectively in managing the tasks associated with the library. With its help, you can handle the library of your school efficiently thereby maintaining the records of the books issued, book return date, late book submission and fines on late submission, books of different authors and publications, edition, and price."])), (_l()(), i1.ɵeld(310, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["With its help, you can efficiently manage the process of issuing books, and hence it helps in saving time and effort."])), (_l()(), i1.ɵeld(312, 0, null, null, 0, "div", [["class", "col-sm-4"]], null, null, null, null, null))], null, null); }
exports.View_ProductComponent_0 = View_ProductComponent_0;
function View_ProductComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-product", [], null, null, null, View_ProductComponent_0, RenderType_ProductComponent)), i1.ɵdid(1, 114688, null, 0, i2.ProductComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ProductComponent_Host_0 = View_ProductComponent_Host_0;
var ProductComponentNgFactory = i1.ɵccf("app-product", i2.ProductComponent, View_ProductComponent_Host_0, {}, {}, []);
exports.ProductComponentNgFactory = ProductComponentNgFactory;


/***/ }),

/***/ "./src/app/product/product.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/product/product.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".product_content[_ngcontent-%COMP%] {\n  font-family: myFirstFont;\n  padding: 40px 0 50px 0;\n  background: #fff; }\n\n.heading_line[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  text-align: center;\n   }\n\n.heading_line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fa7606;\n    font-size: 30px;\n    margin-bottom: 1rem; }\n\n.para_line[_ngcontent-%COMP%] {\n  font-size: 18px; }\n\n.sub-heading_line[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 20px; }\n\n.sub-heading_line[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #fa7606;\n    font-size: 24px;\n    margin-bottom: 1rem; }\n\n.card-imgs[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto; }\n\n.snip1401[_ngcontent-%COMP%] {\n  font-family: 'Playfair Display', Arial, sans-serif;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  min-width: 100%;\n  max-width: 100%;\n  width: 100%;\n  color: #000000;\n  text-align: right;\n  font-size: 16px; }\n\n.snip1401[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  transition: all 0.35s ease; }\n\n.snip1401[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.snip1401[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -1px;\n  z-index: 1;\n  opacity: 1;\n  padding: 30px 0 30px 10px;\n  background-color: #ffffff;\n  width: 40%;\n  -webkit-transform: translateX(150%);\n  transform: translateX(150%); }\n\n.snip1401[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 99%;\n  content: '';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 122px 120px 120px 0;\n  border-color: transparent #ffffff transparent transparent; }\n\n.snip1401[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: 50%;\n  right: 40%;\n  content: '';\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 120px 120px 0 120px;\n  border-color: rgba(255, 255, 255, 0.5) transparent transparent transparent;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  transition: all 0.35s ease; }\n\n.snip1401[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .snip1401[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5em;\n  -webkit-transform: translateX(-30px);\n  transform: translateX(-30px);\n  margin: 0; }\n\n.snip1401[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  line-height: 1.1em;\n  font-weight: 900;\n  font-size: 1.4em;\n  opacity: 0.75; }\n\n.snip1401[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em; }\n\n.snip1401[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 20px 30px;\n  font-size: 44px;\n  color: #ffffff;\n  opacity: 0; }\n\n.snip1401[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1; }\n\n.snip1401[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%], .snip1401.hover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  zoom: 1;\n  filter: alpha(opacity=50);\n  -webkit-opacity: 0.5;\n  opacity: 0.5; }\n\n.snip1401[_ngcontent-%COMP%]:hover:after, .snip1401.hover[_ngcontent-%COMP%]:after, .snip1401[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%], .snip1401.hover[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%], .snip1401[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .snip1401.hover[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  opacity: 1; }\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0.25rem; }\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.25rem;\n  font-weight: 700 !important;\n  font-size: 20px !important; }\n\n.read_more[_ngcontent-%COMP%] {\n  float: right;\n  color: #fff;\n  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%); }\n\n.modal-para[_ngcontent-%COMP%] {\n  margin-top: 1rem; }\n\n.modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 10px 24px 0;\n  border-bottom: 0; }\n\n.close[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800; }\n\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px; }\n\n.modal-content[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border: 5px solid #000;\n  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%); }\n\n.modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 0px 24px 24px; }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Zzzzz\Full\Web\E-SARASWATI-NEW\Website_final\E-Saraswati-6SEO\e-saraswati\src\main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@agm/core/core.module":
/*!****************************************!*\
  !*** external "@agm/core/core.module" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/core.module");

/***/ }),

/***/ "@agm/core/directives/map":
/*!*******************************************!*\
  !*** external "@agm/core/directives/map" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/map");

/***/ }),

/***/ "@agm/core/directives/marker":
/*!**********************************************!*\
  !*** external "@agm/core/directives/marker" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/marker");

/***/ }),

/***/ "@agm/core/services/fit-bounds":
/*!************************************************!*\
  !*** external "@agm/core/services/fit-bounds" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/fit-bounds");

/***/ }),

/***/ "@agm/core/services/google-maps-api-wrapper":
/*!*************************************************************!*\
  !*** external "@agm/core/services/google-maps-api-wrapper" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/google-maps-api-wrapper");

/***/ }),

/***/ "@agm/core/services/managers/circle-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/circle-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/circle-manager");

/***/ }),

/***/ "@agm/core/services/managers/data-layer-manager":
/*!*****************************************************************!*\
  !*** external "@agm/core/services/managers/data-layer-manager" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/data-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/info-window-manager":
/*!******************************************************************!*\
  !*** external "@agm/core/services/managers/info-window-manager" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/info-window-manager");

/***/ }),

/***/ "@agm/core/services/managers/kml-layer-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/kml-layer-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/kml-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/marker-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/marker-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/marker-manager");

/***/ }),

/***/ "@agm/core/services/managers/polygon-manager":
/*!**************************************************************!*\
  !*** external "@agm/core/services/managers/polygon-manager" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polygon-manager");

/***/ }),

/***/ "@agm/core/services/managers/polyline-manager":
/*!***************************************************************!*\
  !*** external "@agm/core/services/managers/polyline-manager" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polyline-manager");

/***/ }),

/***/ "@agm/core/services/managers/rectangle-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/rectangle-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/rectangle-manager");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/lazy-maps-api-loader":
/*!**************************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/lazy-maps-api-loader" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/lazy-maps-api-loader");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/maps-api-loader":
/*!*********************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/maps-api-loader" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/maps-api-loader");

/***/ }),

/***/ "@agm/core/utils/browser-globals":
/*!**************************************************!*\
  !*** external "@agm/core/utils/browser-globals" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/utils/browser-globals");

/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ng-toolkit/universal":
/*!****************************************!*\
  !*** external "@ng-toolkit/universal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-toolkit/universal");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map