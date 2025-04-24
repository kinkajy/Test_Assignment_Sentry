const vehiclePage = require('../pageobjects/VehiclePage');
const { expect } = require('chai');
const allureReporter = require('@wdio/allure-reporter').default;

describe('Vehicle Cloning Tests', function () {
    beforeEach(async function () {
        allureReporter.addFeature('Vehicle Cloning');
        allureReporter.addSeverity('blocker');
        allureReporter.addTag('ui');
        await vehiclePage.open();
    });

    it('should clone vehicle with initial data', async function () {
        allureReporter.addTestId('TC-1');
        allureReporter.addDescription('Test case for cloning vehicle with initial data');

        // Test Case 1
        allureReporter.addStep('Fill initial vehicle data');
        await vehiclePage.fillVehicleData('Vehicle 1', 'BMW', '2020');

        allureReporter.addStep('Select color');
        await vehiclePage.selectColor('Red');

        allureReporter.addStep('Clone vehicle');
        await vehiclePage.cloneVehicle();

        const clonedData = await vehiclePage.getClonedVehicleData();

        allureReporter.addStep('Verify cloned data');
        expect(clonedData.name).to.equal('Vehicle 1');
        expect(clonedData.model).to.equal('BMW');
        expect(clonedData.year).to.equal('2020');
        expect(clonedData.color).to.equal('Red');
    });

    it('should clone vehicle with changed model', async function () {
        allureReporter.addTestId('TC-2');
        allureReporter.addDescription('Test case for cloning vehicle with updated model');

        // Test Case 2
        allureReporter.addStep('Fill initial vehicle data');
        await vehiclePage.fillVehicleData('Vehicle 1', 'BMW', '2020');

        allureReporter.addStep('Update vehicle model');
        await vehiclePage.modelSelect.selectByVisibleText('Mazda');

        allureReporter.addStep('Select color');
        await vehiclePage.selectColor('Red');

        allureReporter.addStep('Clone vehicle');
        await vehiclePage.cloneVehicle();

        const clonedData = await vehiclePage.getClonedVehicleData();

        allureReporter.addStep('Verify cloned data');
        expect(clonedData.name).to.equal('Vehicle 1');
        expect(clonedData.model).to.equal('Mazda');
        expect(clonedData.year).to.equal('2020');
        expect(clonedData.color).to.equal('Red');
    });
});
