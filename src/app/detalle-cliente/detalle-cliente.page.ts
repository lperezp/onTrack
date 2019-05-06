import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: "app-detalle-cliente",
  templateUrl: "./detalle-cliente.page.html",
  styleUrls: ["./detalle-cliente.page.scss"]
})
export class DetalleClientePage implements OnInit {
  cliente = {
    jobs_id: null,
    destination_name: "",
    destination_address: "",
    destination_entity_info: "",
    service_name: "",
    product_name: ""
  };
  constructor(private activeRoute: ActivatedRoute, private camera: Camera) {
    this.cliente = {
      jobs_id: this.activeRoute.snapshot.paramMap.get("jobs_id"),
      destination_name: this.activeRoute.snapshot.paramMap.get(
        "destination_name"
      ),
      destination_address: this.activeRoute.snapshot.paramMap.get(
        "destination_address"
      ),
      destination_entity_info: this.activeRoute.snapshot.paramMap.get(
        "destination_entity_info"
      ),
      service_name: this.activeRoute.snapshot.paramMap.get("service_name"),
      product_name: this.activeRoute.snapshot.paramMap.get("product_name")
    };
    console.log(this.cliente);
  }

  ngOnInit() {}

  getCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }
}
