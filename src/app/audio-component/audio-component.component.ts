import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { FetchProductsService } from '../fetch-products.service';
import 'rxjs/add/observable/interval';
import { interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-audio-component',
  templateUrl: './audio-component.component.html',
  styleUrls: ['./audio-component.component.css']
})
export class AudioComponentComponent  {
    private record;
    
    private recording = false;
    mySubscription: Subscription;
    private url;
    private error;
    public value;
    public filedata;
    public productList;
    constructor(private domSanitizer: DomSanitizer,private productservice: FetchProductsService)  {
    }
    sanitize(url:string){
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
    
    initiateRecording() {

        this.recording = true;
        let mediaConstraints = {
            video: false,
            audio: true
        };
       
        navigator.mediaDevices
            .getUserMedia(mediaConstraints)
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
    
    successCallback(stream) {
        var options = {
            mimeType: "audio/wav",
            numberOfAudioChannels: 1
        };
        
        var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
        this.record = new StereoAudioRecorder(stream, options);
        this.record.record();
    }
    
    stopRecording() {
        this.recording = false;
        this.record.stop(this.processRecording.bind(this));
    }
    /**
     * processRecording Do what ever you want with blob
     * @param  {any} blob Blog
     */
    processRecording(blob) {
        this.url = URL.createObjectURL(blob);
      var wavefilefromblob = new File([blob], 'filename.wav');
      console.log(wavefilefromblob);
        this.productservice.getWatsonSearch(wavefilefromblob).subscribe(
          
      data => {
        console.log(data);
        this.filedata = data.results[0].alternatives[0].transcript;
        console.log(this.filedata);
        this.productservice.getSearchDetails(this.filedata).subscribe(
          data => {
            console.log(data);
            this.productList = data.plannedEvents;
            console.log("fulltextserach called");
    
      
    },  
    error => {
      console.log("some error occured");
      console.log(error.errorMessage);
    });
       
},
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      })
        
        
    }
    errorCallback(error) {
        this.error = 'Can not play audio in your browser';
    }

    callSearch(filedata){
    
    }

     callMultiple(blob)
    {
      this.initiateRecording();
      this.mySubscription= interval(4000).subscribe((x =>{
        this.stopRecording();
        this.processRecording(blob);
    }));

    }


}
