(function() {
     function SongPlayer(Fixtures) {
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
        		currentBuzzObject.stop();
        		SongPlayer.currentSong.playing = null;
    		}
 
    		currentBuzzObject = new buzz.sound(song.audioUrl, {
        		formats: ['mp3'],
        		preload: true
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
		 	 * @type number
		 	 */
			 var currentSongIndex = getSongIndex(SongPlayer.currentSong);
			 currentSongIndex--;
			 
			 if (currentSongIndex < 0) {
				 currentBuzzObject.stop();
				 SongPlayer.currentSong.playing = null;
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

     
		 
        return SongPlayer;
		 
     }
 
 
 
     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();