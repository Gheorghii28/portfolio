import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  classValidInvalid = [
    'name-valid',
    'email-valid',
    'message-valid',
    'email-format-valid',
    'name-invalid',
    'email-invalid',
    'message-invalid',
    'email-format-invalid'
  ]

  resultInfoContainer: any;
  formResult: any;

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;
  @ViewChild('nameFieldSet') nameFieldSet!: ElementRef;
  @ViewChild('emailFieldSet') emailFieldSet!: ElementRef;
  @ViewChild('messageFieldSet') messageFieldSet!: ElementRef;
  @ViewChild('sendResultInfo') sendResultInfo!: ElementRef;
  @ViewChild('formResultInfo') formResultInfo!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.initializeFieldInputs();
    this.resultInfoContainer = this.sendResultInfo.nativeElement;
    this.formResult = this.formResultInfo.nativeElement;
  }

  initializeFieldInputs() {
    const nameField = this.nameField.nativeElement;
    const nameLabel = this.myForm.nativeElement.querySelector('.name-label');
    const emailField = this.emailField.nativeElement;
    const emailLabel = this.myForm.nativeElement.querySelector('.email-label');
    const messageField = this.messageField.nativeElement;
    const messageLabel = this.myForm.nativeElement.querySelector('.message-label');

    const name = {
      fieldSet: this.nameFieldSet.nativeElement,
      fieldName: nameField,
      labelName: nameLabel,
      labelPositionInitial: 'bottom14',
      labelPositionNew: 'bottom45',
      classValid: 'name-valid',
      classInvalid: 'name-invalid'
    };

    const email = {
      fieldSet: this.emailFieldSet.nativeElement,
      fieldName: emailField,
      labelName: emailLabel,
      labelPositionInitial: 'bottom14',
      labelPositionNew: 'bottom45',
      classValid: 'email-valid',
      classInvalid: 'email-invalid'
    };

    const message = {
      fieldSet: this.messageFieldSet.nativeElement,
      fieldName: messageField,
      labelName: messageLabel,
      labelPositionInitial: 'top14',
      labelPositionNew: 'top-11',
      classValid: 'message-valid',
      classInvalid: 'message-invalid'
    };

    this.handleField(name);
    this.handleField(email);
    this.handleField(message);
  }

  handleField(field: any) {
    field.fieldName.addEventListener('input', () => {
      this.checkField(field);
    });
  }

  checkField(field: any) {
    if (field.fieldName.value.trim() !== '') {
      if (field.fieldSet == this.emailFieldSet.nativeElement) {
        this.labelToPositionTop(field.labelName, field.labelPositionInitial, field.labelPositionNew);
        this.checkEmail(field.fieldName, field.fieldSet, field.classValid, field.classInvalid);
      } else {
        this.labelToPositionTop(field.labelName, field.labelPositionInitial, field.labelPositionNew);
        this.renderer.removeClass(field.fieldSet, field.classInvalid);
        this.renderer.addClass(field.fieldSet, field.classValid);
      }
    } else {
      this.labelToPositionInitial(field.labelName, field.labelPositionInitial, field.labelPositionNew);
      this.renderer.removeClass(field.fieldSet, field.classValid);
    }
  }

  labelToPositionTop(label: any, classInitial: string, classNew: string) {
    this.renderer.removeClass(label, classInitial);
    this.renderer.addClass(label, classNew);
  }

  labelToPositionInitial(label: any, classInitial: string, classNew: string) {
    this.renderer.addClass(label, classInitial);
    this.renderer.removeClass(label, classNew);
  }

  checkEmail(field: any, fieldSet: any, classValid: string, classInvalid: string) {
    if (!this.isValidEmail(field.value)) {
      this.renderer.addClass(fieldSet, 'email-format-invalid');
      this.renderer.removeClass(fieldSet, 'email-format-invalid');
      this.renderer.removeClass(fieldSet, classValid);
    } else {
      this.renderer.removeClass(fieldSet, 'email-format-invalid');
      this.renderer.removeClass(fieldSet, classInvalid);
      this.renderer.addClass(fieldSet, classValid);
    }
  }

  async sendMail() {
    let formElements = {
      nameField: this.nameField.nativeElement,
      emailField: this.emailField.nativeElement,
      messageField: this.messageField.nativeElement,
      sendBtn: this.sendBtn.nativeElement
    }

    if (this.validateFormFields(formElements)) {
      await this.submitForm(formElements);
    }
  }

  validateFormFields(formElements: any) {
    if (formElements.nameField.value.trim() === '') {
      this.renderer.addClass(this.nameFieldSet.nativeElement, 'name-invalid');
      formElements.nameField.focus();
      return false;
    } else {
      this.renderer.removeClass(this.nameFieldSet.nativeElement, 'name-invalid');
      this.renderer.addClass(this.nameFieldSet.nativeElement, 'name-valid');
    }

    if (formElements.emailField.value.trim() === '') {
      this.renderer.removeClass(this.emailFieldSet.nativeElement, 'email-format-invalid');
      this.renderer.removeClass(this.emailFieldSet.nativeElement, 'email-valid');
      this.renderer.addClass(this.emailFieldSet.nativeElement, 'email-invalid');
      formElements.emailField.focus();
      return false;
    } else if (formElements.emailField.value.trim() !== '' && !this.isValidEmail(formElements.emailField.value)) {
      this.renderer.removeClass(this.emailFieldSet.nativeElement, 'email-invalid');
      this.renderer.removeClass(this.emailFieldSet.nativeElement, 'email-valid');
      this.renderer.addClass(this.emailFieldSet.nativeElement, 'email-format-invalid');
      formElements.emailField.focus();
      return false;
    } else {
      this.renderer.removeClass(this.emailFieldSet.nativeElement, 'email-format-invalid');
      this.renderer.removeClass(this.emailFieldSet.nativeElement, 'email-invalid');
      this.renderer.addClass(this.emailFieldSet.nativeElement, 'email-valid');
    }

    if (formElements.messageField.value.trim() === '') {
      this.renderer.addClass(this.messageFieldSet.nativeElement, 'message-invalid');
      formElements.messageField.focus();
      return false;
    } else {
      this.renderer.removeClass(this.messageFieldSet.nativeElement, 'message-invalid');
      this.renderer.addClass(this.messageFieldSet.nativeElement, 'message-valid');
    }

    return true;
  }

  async submitForm(formElements: any) {
    this.disableFormElements(formElements, true);
    await this.sendFormData(formElements);
    this.emptyFields(formElements);
    this.disableFormElements(formElements, false);
  }

  disableFormElements(formElements: any, disabledValue: boolean) {
    for (let key in formElements) {
      if (formElements.hasOwnProperty(key)) {
        let element = formElements[key];
        element.disabled = disabledValue;
      }
    }
  }

  createFormData(formElements: any) {
    let fd = new FormData();
    fd.append('name', formElements.nameField.value);
    fd.append('email', formElements.emailField.value);
    fd.append('message', formElements.messageField.value);
    return fd;
  }

  async sendFormData(formElements: any) {
    try {
      this.showLoadingAnimation();
      const response = await fetch('https://gheorghii-popovici.developerakademie.net/send_mail/send_mail.php', {
        method: 'POST',
        body: this.createFormData(formElements)
      });

      if (response.ok) {
        this.showSuccessSymbolAndMessage();
      } else {
        this.showErrorMessageBox('Error while submitting the form.');
      }
      
    } catch (error) {
      this.showErrorMessageBox(error);
    } finally {
      this.hideLoadingAnimation();
    }
  }

  showLoadingAnimation() {
    this.renderer.addClass(this.formResult, 'form-result-info');
    this.renderer.addClass(this.resultInfoContainer, 'show-form-load-animation');
    this.renderer.addClass(this.myForm.nativeElement, 'brightness04');
  }

  showSuccessSymbolAndMessage() {
    this.renderer.removeClass(this.resultInfoContainer, 'show-form-load-animation');
    this.renderer.addClass(this.resultInfoContainer, 'show-form-succes-message');
  }

  showErrorMessageBox(errorMessage: any) {
    this.renderer.removeClass(this.resultInfoContainer, 'show-form-load-animation');
    this.renderer.addClass(this.formResult, 'form-result-info');
    this.renderer.addClass(this.resultInfoContainer, 'show-form-error-message');
    this.renderer.addClass(this.myForm.nativeElement, 'brightness04');
  }

  hideLoadingAnimation() {
    this.renderer.addClass(this.formResult, 'opacity-null');
    setTimeout(() => {
      this.renderer.removeClass(this.formResult, 'form-result-info');
      this.renderer.removeClass(this.resultInfoContainer, 'show-form-load-animation');
      this.renderer.removeClass(this.myForm.nativeElement, 'brightness04');
      this.renderer.removeClass(this.resultInfoContainer, 'show-form-succes-message');
      this.renderer.removeClass(this.resultInfoContainer, 'show-form-error-message');
      this.renderer.removeClass(this.formResult, 'opacity-null');
    }, 2000);
  }

  emptyFields(formElements: any) {
    formElements.nameField.value = '';
    formElements.emailField.value = '';
    formElements.messageField.value = '';
    this.removeValidInvalidClass();
    this.initialLabelPosition();
  }

  initialLabelPosition() {
    this.labelToPositionInitial(this.myForm.nativeElement.querySelector('.name-label'), 'bottom14', 'bottom45');
    this.labelToPositionInitial(this.myForm.nativeElement.querySelector('.email-label'), 'bottom14', 'bottom45');
    this.labelToPositionInitial(this.myForm.nativeElement.querySelector('.message-label'), 'top14', 'top-11');
  }

  removeValidInvalidClass() {
    this.classValidInvalid.forEach((classValue: string) => {
      this.renderer.removeClass(this.nameFieldSet.nativeElement, classValue);
      this.renderer.removeClass(this.emailFieldSet.nativeElement, classValue);
      this.renderer.removeClass(this.messageFieldSet.nativeElement, classValue);
    });
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}