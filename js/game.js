// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function() {
    'use strict';
    /**
     * T-Rex runner.
     * @param {string} outerContainerId Outer containing element id.
     * @param {Object} opt_config
     * @constructor
     * @export
     */
    function Runner(outerContainerId, opt_config) {
      // Singleton
      if (Runner.instance_) {
        return Runner.instance_;
      }
      Runner.instance_ = this;
    
      this.outerContainerEl = document.querySelector(outerContainerId);
      this.containerEl = null;
      this.snackbarEl = null;
      // this.detailsButton = this.outerContainerEl.querySelector('#details-button');
    
      this.config = opt_config || Runner.config;
    
      this.dimensions = Runner.defaultDimensions;
    
      this.canvas = null;
      this.canvasCtx = null;
    
      this.tRex = null;
    
      this.distanceMeter = null;
      this.distanceRan = 0;
    
      this.highestScore = 0;
    
      this.time = 0;
      this.runningTime = 0;
      this.msPerFrame = 1000 / FPS;
      this.currentSpeed = this.config.SPEED;
    
      this.obstacles = [];
    
      this.started = false;
      this.activated = false;
      this.crashed = false;
      this.paused = false;
    
      this.resizeTimerId_ = null;
    
      this.playCount = 0;
    
      // Sound FX.
      this.audioBuffer = null;
      this.soundFx = {};
    
      // Global web audio context for playing sounds.
      this.audioContext = null;
    
      // Images.
      this.images = {};
      this.imagesLoaded = 0;
    
      // if (this.isDisabled()) {
      //   this.setupDisabledRunner();
      // } else {
        this.loadImages();
      // }
    
      this.gamepadPreviousKeyDown = false;
    }
    window['Runner'] = Runner;
    
    })();
    
    //start the game
    new Runner('.interstitial-wrapper');
    
    