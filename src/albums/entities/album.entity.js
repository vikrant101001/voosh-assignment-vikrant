"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
var typeorm_1 = require("typeorm");
var artist_entity_1 = require("../../artists/entities/artist.entity");
var track_entity_1 = require("../../tracks/entities/track.entity");
var Album = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('albums')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _year_decorators;
    var _year_initializers = [];
    var _year_extraInitializers = [];
    var _artist_decorators;
    var _artist_initializers = [];
    var _artist_extraInitializers = [];
    var _tracks_decorators;
    var _tracks_initializers = [];
    var _tracks_extraInitializers = [];
    var Album = _classThis = /** @class */ (function () {
        function Album_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.title = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.year = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _year_initializers, void 0));
            this.artist = (__runInitializers(this, _year_extraInitializers), __runInitializers(this, _artist_initializers, void 0));
            this.tracks = (__runInitializers(this, _artist_extraInitializers), __runInitializers(this, _tracks_initializers, void 0));
            __runInitializers(this, _tracks_extraInitializers);
        }
        return Album_1;
    }());
    __setFunctionName(_classThis, "Album");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)('uuid')];
        _title_decorators = [(0, typeorm_1.Column)()];
        _year_decorators = [(0, typeorm_1.Column)()];
        _artist_decorators = [(0, typeorm_1.ManyToOne)(function () { return artist_entity_1.Artist; }, function (artist) { return artist.albums; })];
        _tracks_decorators = [(0, typeorm_1.OneToMany)(function () { return track_entity_1.Track; }, function (track) { return track.album; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _year_decorators, { kind: "field", name: "year", static: false, private: false, access: { has: function (obj) { return "year" in obj; }, get: function (obj) { return obj.year; }, set: function (obj, value) { obj.year = value; } }, metadata: _metadata }, _year_initializers, _year_extraInitializers);
        __esDecorate(null, null, _artist_decorators, { kind: "field", name: "artist", static: false, private: false, access: { has: function (obj) { return "artist" in obj; }, get: function (obj) { return obj.artist; }, set: function (obj, value) { obj.artist = value; } }, metadata: _metadata }, _artist_initializers, _artist_extraInitializers);
        __esDecorate(null, null, _tracks_decorators, { kind: "field", name: "tracks", static: false, private: false, access: { has: function (obj) { return "tracks" in obj; }, get: function (obj) { return obj.tracks; }, set: function (obj, value) { obj.tracks = value; } }, metadata: _metadata }, _tracks_initializers, _tracks_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Album = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Album = _classThis;
}();
exports.Album = Album;
