(ns clover.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn generate-color [max]
  {:r (rand-int max)
   :g (rand-int max)
   :b (rand-int max)})

(def frame-rate 60)
(def init-t (/ frame-rate 20))

(def color-1 (generate-color 255))
(def color-2 {:r (- 255 (:r color-1))
              :g (int (/ (- 255 (:g color-1)) 1.5))
              :b (- 255 (:b color-1))})

(defn combine-color [color-1 color-2 ratio]
  (let [ratio (if (< ratio 1)
                ratio
                (/ 1 ratio))
        r1 (:r color-1)
        g1 (:g color-1)
        b1 (:b color-1)
        r2 (:r color-2)
        g2 (:g color-2)
        b2 (:b color-2)]
  {:r (-> (* r2 ratio)
          (+ (* r1 (- 1 ratio)))
          (int))
   :g (-> (* g2 ratio)
          (+ (* g1 (- 1 ratio)))
          (int))
   :b (-> (* b2 ratio)
          (+ (* b1 (- 1 ratio)))
          (int))}))

(defn update-stroke-color [color-1 color-2 ratio]
  (let [combined-color (combine-color color-1 color-2 ratio)]
    (q/stroke (:r combined-color)
              (:g combined-color)
              (:b combined-color))))

(defn f [t]
  (let [r (-> (+ (q/sin (* 2 t))
                 (* 0.25 (q/sin (* 6 t))))
              (* 100))
        step (/ 1 (/ (/ t 3.14) 10))
        c (combine-color color-1 color-2 ratio)]
    (update-stroke-color color-1 color-2 step)
    [(/ (* r (q/cos t)) step)
     (/ (* r (q/sin t)) step)]))

(defn draw []
  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    (let [t (/ (q/frame-count) 20)]
      (q/line (f t)
              (f (+ t 0.1))))))

(defn setup []
  (q/frame-rate frame-rate)
  (update-stroke-color color-1 color-2 init-t)  
  (q/background 0 0 0))

(q/defsketch clover
  :size [400 400]
  :setup setup
  :draw draw)
