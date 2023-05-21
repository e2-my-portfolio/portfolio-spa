import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import 'src/assets/scripts/smtp.js';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

    sendEmail(name: string, email: string, text: string): Promise<void> {
        return Email.send({
            Host: environment.elasticEmail.server,
            Username: environment.elasticEmail.username,
            Password: environment.elasticEmail.password,
            To: environment.elasticEmail.to,
            From: environment.elasticEmail.username,
            Subject: 'My portfolio message',
            Body: `
                ${text}
                </br>
                </br>
                <b>Name:</b> ${name},
                <b>Email:</b> ${email}
            `.replace('\n', `</br>`)
        }) as Promise<void>;
    }
}
