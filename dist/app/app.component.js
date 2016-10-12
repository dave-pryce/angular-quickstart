"use strict";
;
constructor(private, languageService, LanguageService);
{ }
ngOnInit();
{
    this.languageService.getLanguages()
        .subscribe(data => this.languages = data);
}
class AppComponent {
}
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map