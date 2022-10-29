import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [
    './contact-form.component.scss',
    '../../../../animations/neumorphism.scss'
  ]
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});

  constructor(
    public deviceDetector: DeviceDetectorService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {}

  ngOnInit(): void {
    void this.contactForm.addControl('name', new FormControl('', Validators.required));
    void this.contactForm.addControl('email', new FormControl('', [Validators.email, Validators.required]));
    void this.contactForm.addControl('message', new FormControl('', Validators.required));
  }

  public executeRecaptchaV3() {
    this.recaptchaV3Service.execute('contactAction').subscribe(
      (token) => {
        this.resolved(token);
      }
    );
  }

  resolved(token: unknown): void {
    console.log('token: ', token);
  }

  onError(error: unknown) {
    console.error(error);
  }

  sendMessage(): void {
    if (this.contactForm && this.contactForm.valid) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const values = this.contactForm.value;
      console.log(values);
    }
  }

}
