// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('clover.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
clover.core.generate_color = (function clover$core$generate_color(max){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,cljs.core.rand_int(max),cljs.core.cst$kw$g,cljs.core.rand_int(max),cljs.core.cst$kw$b,cljs.core.rand_int(max)], null);
});
clover.core.frame_rate = (60);
clover.core.init_t = (clover.core.frame_rate / (20));
clover.core.color_1 = clover.core.generate_color((255));
clover.core.color_2 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,((255) - cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(clover.core.color_1)),cljs.core.cst$kw$g,((((255) - cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(clover.core.color_1)) / 1.5) | (0)),cljs.core.cst$kw$b,((((255) - cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(clover.core.color_1)) / 1.9) | (0))], null);
clover.core.combine_color = (function clover$core$combine_color(color_1,color_2,ratio){
var ratio__$1 = (((ratio < (1)))?ratio:((1) / ratio));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,(((cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(color_2) * ratio__$1) + (cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(color_1) * ((1) - ratio__$1))) | (0)),cljs.core.cst$kw$g,(((cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(color_2) * ratio__$1) + (cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(color_1) * ((1) - ratio__$1))) | (0)),cljs.core.cst$kw$b,(((cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(color_2) * ratio__$1) + (cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(color_1) * ((1) - ratio__$1))) | (0))], null);
});
clover.core.update_stroke_color = (function clover$core$update_stroke_color(color_1,color_2,ratio){
var combined_color = clover.core.combine_color(color_1,color_2,ratio);
return quil.core.stroke.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(combined_color),cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(combined_color),cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(combined_color));
});
clover.core.f = (function clover$core$f(t){
var r = ((quil.core.sin(((2) * t)) + (0.25 * quil.core.sin(((6) * t)))) * (100));
var step = ((1) / ((t / 3.14) / (10)));
clover.core.update_stroke_color(clover.core.color_1,clover.core.color_2,step);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((r * quil.core.cos(t)) / step),((r * quil.core.sin(t)) / step)], null);
});
clover.core.draw = (function clover$core$draw(){
var tr__10713__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__10713__auto__);

var t = (quil.core.frame_count() / (20));
return quil.core.line.cljs$core$IFn$_invoke$arity$2(clover.core.f(t),clover.core.f((t + 0.1)));
}finally {quil.core.pop_matrix();
}});
clover.core.setup = (function clover$core$setup(){
quil.core.frame_rate(clover.core.frame_rate);

clover.core.update_stroke_color(clover.core.color_1,clover.core.color_2,clover.core.init_t);

return quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(0));
});
clover.core.clover = (function clover$core$clover(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$host,"clover",cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(clover.core.setup))?(function() { 
var G__10810__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clover.core.setup,args);
};
var G__10810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10811__i = 0, G__10811__a = new Array(arguments.length -  0);
while (G__10811__i < G__10811__a.length) {G__10811__a[G__10811__i] = arguments[G__10811__i + 0]; ++G__10811__i;}
  args = new cljs.core.IndexedSeq(G__10811__a,0);
} 
return G__10810__delegate.call(this,args);};
G__10810.cljs$lang$maxFixedArity = 0;
G__10810.cljs$lang$applyTo = (function (arglist__10812){
var args = cljs.core.seq(arglist__10812);
return G__10810__delegate(args);
});
G__10810.cljs$core$IFn$_invoke$arity$variadic = G__10810__delegate;
return G__10810;
})()
:clover.core.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(clover.core.draw))?(function() { 
var G__10813__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clover.core.draw,args);
};
var G__10813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10814__i = 0, G__10814__a = new Array(arguments.length -  0);
while (G__10814__i < G__10814__a.length) {G__10814__a[G__10814__i] = arguments[G__10814__i + 0]; ++G__10814__i;}
  args = new cljs.core.IndexedSeq(G__10814__a,0);
} 
return G__10813__delegate.call(this,args);};
G__10813.cljs$lang$maxFixedArity = 0;
G__10813.cljs$lang$applyTo = (function (arglist__10815){
var args = cljs.core.seq(arglist__10815);
return G__10813__delegate(args);
});
G__10813.cljs$core$IFn$_invoke$arity$variadic = G__10813__delegate;
return G__10813;
})()
:clover.core.draw)], 0));
});
goog.exportSymbol('clover.core.clover', clover.core.clover);

if(cljs.core.truth_(cljs.core.some((function (p1__9881__9882__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__9881__9882__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,clover.core.clover,cljs.core.cst$kw$host_DASH_id,"clover"], null));
}
