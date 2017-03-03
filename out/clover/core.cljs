(ns clover.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def step (atom 0.001))

(defn f [t]
  (let [r (* 100
             (+ (q/sin (* 2 t))
                (* (/ 1 4)
                   (q/sin (* 6 t)))))]
    (when (< (/ r 3.14) 1)
      (reset! step (+ @step 0.001)))
    [(/ (* r (q/cos t)) (/ 1 (/ (/ t 3.14) 10)))
     (/ (* r (q/sin t)) (/ 1 (/ (/ t 3.14) 10)))]))

(defn draw []
  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    (let [t (/ (q/frame-count) 20)]
      (q/line (f t)
              (f (+ t 0.1))))))

(defn setup []
  (q/frame-rate 60)
  (q/stroke 255 255 255)
  (q/background 0 0 0))

(q/defsketch clover
  :size [400 400]
  :setup setup
  :draw draw)
