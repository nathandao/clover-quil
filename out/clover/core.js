// Compiled by ClojureScript 1.9.473 {}
goog.provide('clover.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
clover.core.generate_color = (function clover$core$generate_color(max){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.rand_int.call(null,max),new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.rand_int.call(null,max),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.rand_int.call(null,max)], null);
});
clover.core.frame_rate = (60);
clover.core.init_t = (clover.core.frame_rate / (20));
clover.core.color_1 = clover.core.generate_color.call(null,(255));
clover.core.color_2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),((255) - new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(clover.core.color_1)),new cljs.core.Keyword(null,"g","g",1738089905),((((255) - new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(clover.core.color_1)) / 1.5) | (0)),new cljs.core.Keyword(null,"b","b",1482224470),((255) - new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(clover.core.color_1))], null);
clover.core.combine_color = (function clover$core$combine_color(color_1,color_2,ratio){
var ratio__$1 = (((ratio < (1)))?ratio:((1) / ratio));
var r1 = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(color_1);
var g1 = new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(color_1);
var b1 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(color_1);
var r2 = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(color_2);
var g2 = new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(color_2);
var b2 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(color_2);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),(((r2 * ratio__$1) + (r1 * ((1) - ratio__$1))) | (0)),new cljs.core.Keyword(null,"g","g",1738089905),(((g2 * ratio__$1) + (g1 * ((1) - ratio__$1))) | (0)),new cljs.core.Keyword(null,"b","b",1482224470),(((b2 * ratio__$1) + (b1 * ((1) - ratio__$1))) | (0))], null);
});
clover.core.update_stroke_color = (function clover$core$update_stroke_color(color_1,color_2,ratio){
var combined_color = clover.core.combine_color.call(null,color_1,color_2,ratio);
return quil.core.stroke.call(null,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(combined_color),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(combined_color),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(combined_color));
});
clover.core.f = (function clover$core$f(t){
var r = ((quil.core.sin.call(null,((2) * t)) + (0.25 * quil.core.sin.call(null,((6) * t)))) * (100));
var step = ((1) / ((t / 3.14) / (10)));
var c = clover.core.combine_color.call(null,clover.core.color_1,clover.core.color_2,clover.core.ratio);
clover.core.update_stroke_color.call(null,clover.core.color_1,clover.core.color_2,step);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((r * quil.core.cos.call(null,t)) / step),((r * quil.core.sin.call(null,t)) / step)], null);
});
clover.core.draw = (function clover$core$draw(){
var tr__9318__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__9318__auto__);

var t = (quil.core.frame_count.call(null) / (20));
return quil.core.line.call(null,clover.core.f.call(null,t),clover.core.f.call(null,(t + 0.1)));
}finally {quil.core.pop_matrix.call(null);
}});
clover.core.setup = (function clover$core$setup(){
quil.core.frame_rate.call(null,clover.core.frame_rate);

clover.core.update_stroke_color.call(null,clover.core.color_1,clover.core.color_2,clover.core.init_t);

return quil.core.background.call(null,(0),(0),(0));
});
clover.core.clover = (function clover$core$clover(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"clover",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(400)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,clover.core.setup))?(function() { 
var G__9990__delegate = function (args){
return cljs.core.apply.call(null,clover.core.setup,args);
};
var G__9990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9991__i = 0, G__9991__a = new Array(arguments.length -  0);
while (G__9991__i < G__9991__a.length) {G__9991__a[G__9991__i] = arguments[G__9991__i + 0]; ++G__9991__i;}
  args = new cljs.core.IndexedSeq(G__9991__a,0);
} 
return G__9990__delegate.call(this,args);};
G__9990.cljs$lang$maxFixedArity = 0;
G__9990.cljs$lang$applyTo = (function (arglist__9992){
var args = cljs.core.seq(arglist__9992);
return G__9990__delegate(args);
});
G__9990.cljs$core$IFn$_invoke$arity$variadic = G__9990__delegate;
return G__9990;
})()
:clover.core.setup),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,clover.core.draw))?(function() { 
var G__9993__delegate = function (args){
return cljs.core.apply.call(null,clover.core.draw,args);
};
var G__9993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9994__i = 0, G__9994__a = new Array(arguments.length -  0);
while (G__9994__i < G__9994__a.length) {G__9994__a[G__9994__i] = arguments[G__9994__i + 0]; ++G__9994__i;}
  args = new cljs.core.IndexedSeq(G__9994__a,0);
} 
return G__9993__delegate.call(this,args);};
G__9993.cljs$lang$maxFixedArity = 0;
G__9993.cljs$lang$applyTo = (function (arglist__9995){
var args = cljs.core.seq(arglist__9995);
return G__9993__delegate(args);
});
G__9993.cljs$core$IFn$_invoke$arity$variadic = G__9993__delegate;
return G__9993;
})()
:clover.core.draw));
});
goog.exportSymbol('clover.core.clover', clover.core.clover);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8147__8148__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__8147__8148__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),clover.core.clover,new cljs.core.Keyword(null,"host-id","host-id",742376279),"clover"], null));
}

//# sourceMappingURL=core.js.map