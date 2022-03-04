//play and pause coding
var play_icon = document.getElementById("play-icon");
play_icon.onclick = function() {
    var vedio = document.getElementById("vedio-box");
    if (this.className == "fa fa-play") {
        vedio.play();
        this.className = "fa fa-pause";
        this.title = "pause";
    } else {
        vedio.pause();
        this.className = "fa fa-play";
        this.title = "play";

    }
}

//vedio progress coding
var vedio = document.getElementById("vedio-box");
vedio.ontimeupdate = function() {
    var progress = document.getElementById("progress");
    var time = 100 / this.duration * this.currentTime;
    progress.style.width = time + "%";

    vedio.onended = function() {
        if (vedio.currentTime == vedio.duration) {
            play_icon.className = "fa fa-play";
            play_icon.title = "play";
        } else {
            play_icon.className = "fa fa-pause";
            play_icon.title = "pause";
            vedio.play();
        }
    }
}


//fullscreen coding

var fullscreen = document.getElementById("fullscreen");
fullscreen.onclick = function() {
        if (vedio.requestFullscreen) {
            vedio.requestFullscreen();
        } else if (vedio.webkitRequestFullscreen)

        //lower chrome , safari....
        {
            vedio.webkitRequestFullscreen();
        } else if (vedio.mozkitRequestFullscreen) //lower chrome , safari....
        {
            vedio.mozRequestFullscreen();
        } else if (vedio.msRequestFullscreen) //lower chrome , safari....
        {
            vedio.msRequestFullscreen();
        }

    }
    //stop vedio coding

var stop_coding = document.getElementById("stop-icon");
stop_coding.onclick = function() {
        vedio.currentTime = 0;
        vedio.pause();
        play_icon.className = "fa fa-play";
    }
    //repeat coding
var replay_coding = document.getElementById("repeat-icon");
replay_coding.onclick = function() {
    vedio.currentTime = 0;
    vedio.play();
}

//volume coding
var speaker = document.getElementById("volume-icon");
var vedio = document.getElementById("vedio-box");
speaker.onclick = function() {
    var volume_slider = document.getElementById("volume-slider");
    var vedio = document.getElementById("vedio-box");
    if (volume_slider.style.display == "none") {
        volume_slider.style.display = "block";
        volume_slider.oninput = function() {
            video.volume = this.value;

            if (this.value <= 0) {
                speaker.className = "fa fa-volume-off";
                speaker.title = this.value * 100 + "%";

            } else {
                speaker.className = "fa fa-volume-up";
                speaker.title = this.value * 100 + "%";
            }
        }

    } else {
        volume_slider.style.display = "none";
    }
}

//forward backward progress coding
var progress_bar = document.getElementById("progress-bar");
progress_bar.onclick = function(event) {
    var percentage = event.offsetX / this.offsetWidth;
    vedio.currentTime = percentage * vedio.duration;

}

//download coding
var download_icon = document.getElementById("download-icon");
download_icon.onclick = function() {

        var vedio_src = document.getElementById("vedio-source").src;
        var a_tag = document.createElement("A");

        a_tag.href = vedio_src;
        a_tag.download = "new.mp4";
        document.body.appendChild(a_tag);
        // a_tag.click();
        alert(vedio_src);
    }
    //vedio setting coding
var setting_icon = document.getElementById("setting-con");
setting_icon.onclick = function() {
    var setting_toggle = document.getElementById("setting-app");
    if (setting_toggle.offsetHeight == 0) {
        setting_toggle.style.height = "300px";
        setting_toggle.style.webkitTransition = "0.5s";
    } else {
        setting_toggle.style.height = "0";
        setting_toggle.style.webkitTransition = "0.5";
    }

    //controll vedio speed slider

    var vedio_speed_slider = document.getElementById("speed-slider");
    vedio_speed_slider.oninput = function() {
            vedio.playbackRate = this.value;
            document.getElementById("show-speed").innerHTML = this.value;

        }
        //reser vedio coding

    var reset_speed = document.getElementById("reset-speed");
    reset_speed.onclick = function() {
            vedio.playbackRate = 1;
            document.getElementById("show-speed").innerHTML = 1;
            vedio_speed_slider.value = "1";
        }
        //miniplayer coding
    var miniplayer_icon = document.getElementById("miniplayer-icon");
    miniplayer_icon.onclick = function() {
        setting_toggle.style.height = "0";
        vedio.pause();
        var large_vedio_time = vedio.currentTime;
        var large_vedio_name = document.getElementById("vedio-source").src;
        document.getElementById("container").style.display = "none";
        var miniplayer = document.getElementById("miniplayer");
        miniplayer.style.height = "330px";
        miniplayer.style.display = "block";
        var mini_vedio_player = document.getElementById("mini-vedio-player");
        mini_vedio_player.load();
        document.getElementById("minivedio-source").src = large_vedio_name;
        mini_vedio_player.currentTime = large_vedio_time;
        mini_vedio_player.play();
        var minivedio_source = document.getElementById("minivedio-source");
        if (play_icon.className == "fa fa-pause") {
            minivedio_source.src = large_vedio_name;
            mini_vedio_player.currentTime = large_vedio_time;
            mini_vedio_player.play();
            mini_vedio_player.onmouseover = function() {
                this.controls = true;
            }
            minivedio_close();

        } else {
            minivedio_source.src = large_vedio_name;
            mini_vedio_player.currentTime = large_vedio_time;
            mini_vedio_player.pause();
            mini_vedio_player.onmouseover = function() {
                this.controls = true;
            }
            minivedio_close();
        }

        //close minivideo coding
        function minivedio_close() {
            mini_vedio_player.onplaying = function() {
                var close_icon = document.getElementById("close-icon");
                close_icon.onclick = function() {
                    this.parentElement.style.display = "none";
                    document.getElementById("container").style.display = "block";
                    vedio.load();
                    vedio.currentTime = mini_vedio_player.currentTime;
                    large_vedio_name = minivedio_source.src;
                    vedio.play();
                }

            }

            mini_vedio_player.onpause = function() {
                var close_icon = document.getElementById("close-icon");
                close_icon.onclick = function() {
                    this.parentElement.style.display = "none";
                    document.getElementById("container").style.display = "block";
                    vedio.load();
                    vedio.currentTime = mini_vedio_player.currentTime;
                    large_vedio_name = minivedio_source.src;
                    vedio.pause();
                    play_icon.className = "fa fa-play";
                    play_icon.title = "play";

                }

            }
        }


    }

    //container theme coding
    var container_theme = document.getElementById("container-theme");
    container_theme.onchange = function() {
        var player_header = document.getElementById("header");
        player_header.style.backgroundColor = this.value;
        var controls = document.getElementById("controls1");
        controls.style.backgroundColor = this.value;
        var color = this.value;
        localStorage.setItem("c_theme", color);


    }

    //icon theme coding
    var icon_theme = document.getElementById("icon-theme");
    icon_theme.onchange = function() {
        var controls = document.getElementById("controls1");
        var i_tag = document.getElementsByTagName("I");
        var i;
        for (i = 0; i < i_tag.length; i++) {
            i_tag[i].style.color = this.value;
        }
        localStorage.setItem("i_theme", this.value);
    }

    //text theme coding
    var text_theme = document.getElementById("text-theme");
    text_theme.onchange = function() {
        var player_header = document.getElementById("header");
        player_header.style.color = this.value;
        var playlist_header = document.getElementById("playlist-header");
        playlist_header.style.color = this.value;
        localStorage.setItem("text_theme", this.value);
    }

    //reset button codinng
    var reset_theme = document.getElementById("reset-themes");
    reset_theme.onclick = function() {
        localStorage.removeItem("c_theme");
        localStorage.removeItem("i_theme");
        localStorage.removeItem("text_theme");
        window.location = location.href;
    }

}

function active_theme() {
    var color = [localStorage.getItem("c_theme"), localStorage.getItem("i_theme"), localStorage.getItem("text_theme")];
    var player_header = document.getElementById("header");
    player_header.style.backgroundColor = color[0];
    var controls = document.getElementById("controls1");
    controls.style.backgroundColor = color[0];

    var controls = document.getElementById("controls1");
    var i_tag = document.getElementsByTagName("I");
    var i;
    for (i = 0; i < i_tag.length; i++) {
        i_tag[i].style.color = color[1];
    }

    var player_header = document.getElementById("header");
    player_header.style.color = color[2];
    var playlist_header = document.getElementById("playlist-header");
    playlist_header.style.color = color[2];

}
active_theme();

//vedio buffering coding

vedio.onprogress = function() {
    var percentage = (vedio.buffered.end(0) / vedio.duration) * 100;
    var buffer = document.getElementById("buffer-progress").style.width = percentage + '%';
    buffer.style.width = percentage + '%';
}