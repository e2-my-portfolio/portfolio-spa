import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { EmailService } from 'src/app/services/email.service';
import { StringUtils } from 'src/app/utils/string.utils';

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

  @Output() wasSent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public deviceDetector: DeviceDetectorService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private emailService: EmailService,
    private analytics: AnalyticsService
  ) {}

  ngOnInit(): void {
    void this.contactForm.addControl('name', new FormControl('', Validators.required));
    void this.contactForm.addControl('email', new FormControl('', [Validators.email, Validators.required]));
    void this.contactForm.addControl('message', new FormControl('', Validators.required));
  }

  public executeRecaptchaV3() {
    this.recaptchaV3Service.execute('contactAction').subscribe({
      next: (token: string) => this.resolved(token),
      error: (error) => this.onError(error)
    });
  }

  resolved(token: string): void {
    if (StringUtils.isNotBlank(token)) {
      this.sendMessage();
    } else {
      this.onError('Token is empty');
    }
  }

  onError(error: unknown) {
    console.error(error);
    this.wasSent.emit(false);
  }

  sendMessage(): void {
    if (this.contactForm && this.contactForm.valid) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const values = this.contactForm.value;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.emailService.sendEmail(values.name, values.email, values.message)
        .then(() => {
          this.analytics.logEvent('message_sent');
          this.contactForm.reset() 
          this.wasSent.emit(true);
        })
        .catch((error) => {
          this.analytics.logEvent('message_error');
          console.error(error)
          this.wasSent.emit(false);
        });
    }
  }

}
