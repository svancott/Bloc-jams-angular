(function() {
     function SongPlayer($rootScope, Fixtures) {
          var SongPlayer = {};
		  
		 /**
		 * @desc the album info from Fixtures.js
		 *@type {object}
		 */
		 var currentAlbum = Fixtures.getAlbum();
		 
     	  
		 /**
		 * @desc Buzz object audio file
		 * @type {Object}
		 */
		 var currentBuzzObject = null;
		 
		  /**
		  * @function setSong
		  * @desc Stops currently playing song and loads new audio file as currentBuzzObject
		  * @param {Object} song
		  */
		  var setSong = function(song) {
    		if (currentBuzzObject) {
        		stopSong(song);
    		}
 
    		currentBuzzObject = new buzz.sound(song.audioUrl, {
        		formats: ['mp3'],
        		preload: true
    		});
			  
			currentBuzzObject.bind('timeupdate', function() {
				$rootScope.$apply(function() {
					SongPlayer.currentTime = currentBuzzObject.getTime();
				});
			});
 
    		SongPlayer.currentSong = song;
 		  };
		 
		 /**
		 * @function getSongIndex
		 * @desc get the index of the current song
		 * @param {object} song
		 * @returns the current song's index
		 */
		 var getSongIndex = function(song) {
			 return currentAlbum.songs.indexOf(song);
		 };
		 
		 SongPlayer.currentSong = null;
		 
		 /**
		 * @desc Current playback time (in seconds) of currently playing song
		 * @type {number}
		 */
		 SongPlayer.currentTime = null;
		 
		 /**
		 * @desc Current volume of currently playing song
		 * @type {number}
		 */
		 SongPlayer.volume = null;
		 
		  /**
		  * @function playSong
		  * @desc Plays song and sets song.playing to 'true'
		  * @param {Object} song
		  */
		  var playSong = function(song) {
			 if (currentBuzzObject) {
				 currentBuzzObject.play();
				 song.playing = true;
			 }
		  };
		 
		  /**
		  * @function playSong
		  * @desc Plays song and sets song.playing to 'true'
		  * @param {Object} song
		  */
		  var stopSong = function(song) {
			  if (currentBuzzObject) {
				  currentBuzzObject.stop();
				  SongPlayer.currentSong.playing = null;
			  }
		  }
		  
		  /**
		  * @function play
		  * @desc Plays song and sets song.playing to 'true'
		  * @param {Object} song
		  */
		  SongPlayer.play = function(song) {
			 song = song || SongPlayer.currentSong;
			 if (SongPlayer.currentSong !== song) {
				 setSong(song);
				 playSong(song);
             	
             } else if (SongPlayer.currentSong === song) {
         		if (currentBuzzObject.isPaused()) {
             		playSong(song);
					
         		}
     	 	 }
		   };
		 
		
		  /**
		  * @function pause
		  * @desc Pauses song and sets song.playing to 'false'
		  * @param {Object} song
		  */
		  SongPlayer.pause = function(song) {
			  song = song || SongPlayer.currentSong;
     		  currentBuzzObject.pause();
     		  song.playing = false;
 		  };
		 
		
		 /**
		 * @function previous
		 * @desc sets song index to previous song
		 */
		 SongPlayer.previous = function() {
			 /**
		 	 * @desc index of the current song
		 	 * @type {number}
		 	 */
			 var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			 currentSongIndex--;
			 
			 if (currentSongIndex < 0) {
				 stopSong(song);
			 } else {
				 /**
		 		 * @desc setting the song
		 		 * @type {object}
		 		 */
				 var song = currentAlbum.songs[currentSongIndex];
				 setSong(song);
				 playSong(song);
			 }
		  };
		 
		 SongPlayer.next = function() {
			 /**
		 	 * @desc index of the current song
		 	 * @type {number}
		 	 */
			 var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			 currentSongIndex++;
			 
			 if (currentSongIndex > currentAlbum.songs.length) {
				 stopSong(song);
			 } else {
				 /**
		 		 * @desc setting the song
		 		 * @type {object}
		 		 */
				 var song = currentAlbum.songs[currentSongIndex];
				 setSong(song);
				 playSong(song);
			 }
		 };
		 
		 /**
		 * @function setCurrentTime
		 * @desc Set current time (in seconds) of currently playing song
		 * @param {number} time
		 */
		 SongPlayer.setCurrentTime = function(time) {
			 if (currentBuzzObject) {
				 currentBuzzObject.setTime(time);
			 }
		 };
		 
		 /**
		 * @function setVolume
		 * @desc Set of currently playing song
		 * @param {number} volume
		 */
		 SongPlayer.setVolume = function(volume) {
			 if (currentBuzzObject) {
				 currentBuzzObject.setVolume(volume);
			 }
		 };

      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
		 
        return SongPlayer;
		 
     }
 
 
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();