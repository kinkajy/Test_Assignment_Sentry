class VehiclePage {
    // Vehicle Data Form Elements
    get nameInput() {
        return $('.js-name');
    }

    get modelSelect() {
        return $('.js-model');
    }

    get yearInput() {
        return $('.js-year');
    }

    // Cloned Vehicle Elements
    get clonedNameInput() {
        return $('#model2 .js-name');
    }

    get clonedModelSelect() {
        return $('#model2 .js-model');
    }

    get clonedYearInput() {
        return $('#model2 .js-year');
    }

    get clonedColorInput() {
        return $('#model2 .js-color');
    }

    // Other Elements
    get colorSelect() {
        return $('#vehColor');
    }

    get cloneButton() {
        return $('#cloneVehicle');
    }

    async open() {
        await browser.url('file://' + process.cwd() + '/AQA_Test_Task (1).html');
    }

    async fillVehicleData(name, model, year) {
        await this.nameInput.setValue(name);
        await this.modelSelect.selectByVisibleText(model);
        await this.yearInput.setValue(year);
    }

    async selectColor(color) {
        await this.colorSelect.selectByVisibleText(color);
    }

    async cloneVehicle() {
        await this.cloneButton.click();
    }

    async getClonedVehicleData() {
        return {
            name: await this.clonedNameInput.getValue(),
            model: await this.clonedModelSelect.getValue(),
            year: await this.clonedYearInput.getValue(),
            color: await this.clonedColorInput.getValue(),
        };
    }
}

module.exports = new VehiclePage();
