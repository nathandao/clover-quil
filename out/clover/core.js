// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('clover.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
clover.core.f = (function clover$core$f(t){
var r = ((100) * (quil.core.sin(((2) * t)) + (((1) / (4)) * quil.core.sin(((6) * t)))));
var step = ((1) / ((t / 3.14) / (10)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((r * quil.core.cos(t)) / step),((r * quil.core.sin(t)) / step)], null);
});
clover.core.draw = (function clover$core$draw(){
var tr__11143__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__11143__auto__);

var t = (quil.core.frame_count() / (20));
return quil.core.line.cljs$core$IFn$_invoke$arity$2(clover.core.f(t),clover.core.f((t + 0.1)));
}finally {quil.core.pop_matrix();
}});
clover.core.setup = (function clover$core$setup(){
quil.core.frame_rate((60));

quil.core.stroke.cljs$core$IFn$_invoke$arity$3((255),(255),(255));

return quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(0),(0));
});
clover.core.clover = (function clover$core$clover(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$host,"clover",cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(clover.core.setup))?(function() { 
var G__11285__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clover.core.setup,args);
};
var G__11285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11286__i = 0, G__11286__a = new Array(arguments.length -  0);
while (G__11286__i < G__11286__a.length) {G__11286__a[G__11286__i] = arguments[G__11286__i + 0]; ++G__11286__i;}
  args = new cljs.core.IndexedSeq(G__11286__a,0);
} 
return G__11285__delegate.call(this,args);};
G__11285.cljs$lang$maxFixedArity = 0;
G__11285.cljs$lang$applyTo = (function (arglist__11287){
var args = cljs.core.seq(arglist__11287);
return G__11285__delegate(args);
});
G__11285.cljs$core$IFn$_invoke$arity$variadic = G__11285__delegate;
return G__11285;
})()
:clover.core.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(clover.core.draw))?(function() { 
var G__11288__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clover.core.draw,args);
};
var G__11288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11289__i = 0, G__11289__a = new Array(arguments.length -  0);
while (G__11289__i < G__11289__a.length) {G__11289__a[G__11289__i] = arguments[G__11289__i + 0]; ++G__11289__i;}
  args = new cljs.core.IndexedSeq(G__11289__a,0);
} 
return G__11288__delegate.call(this,args);};
G__11288.cljs$lang$maxFixedArity = 0;
G__11288.cljs$lang$applyTo = (function (arglist__11290){
var args = cljs.core.seq(arglist__11290);
return G__11288__delegate(args);
});
G__11288.cljs$core$IFn$_invoke$arity$variadic = G__11288__delegate;
return G__11288;
})()
:clover.core.draw)], 0));
});
goog.exportSymbol('clover.core.clover', clover.core.clover);

if(cljs.core.truth_(cljs.core.some((function (p1__9924__9925__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__9924__9925__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,clover.core.clover,cljs.core.cst$kw$host_DASH_id,"clover"], null));
}
