$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 3,
  "name": "Computer page test",
  "description": "As user I want to open computer page into nop commerce website",
  "id": "computer-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 5083442800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 159067700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 982607000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateComputersPageSuccessfully()"
});
formatter.result({
  "duration": 53168700,
  "status": "passed"
});
formatter.after({
  "duration": 775988500,
  "status": "passed"
});
formatter.before({
  "duration": 2323837500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To Desktop Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify desktop page displayed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 51700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 915483000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenu(String)"
});
formatter.result({
  "duration": 441204900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyDesktopPageDisplayedSuccessfully()"
});
formatter.result({
  "duration": 49957100,
  "status": "passed"
});
formatter.after({
  "duration": 755044000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "verify That User Should build Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i select Processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i select os \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i select software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the  confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3032630900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verify That User Should build Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i select Processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the  confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 73300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 935093900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenu(String)"
});
formatter.result({
  "duration": 895373600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 771339000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 134987600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 191006200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 96112900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 73463000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 81938600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 90925700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 294908300,
  "status": "passed"
});
formatter.after({
  "duration": 873916600,
  "status": "passed"
});
formatter.before({
  "duration": 2238793200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should build Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i select Processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the  confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 496854100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenu(String)"
});
formatter.result({
  "duration": 418117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 721757100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 80907200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 105121900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 106592400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 119881500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 100980200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 99291400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 299338700,
  "status": "passed"
});
formatter.after({
  "duration": 862192500,
  "status": "passed"
});
formatter.before({
  "duration": 2369929100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should build Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i select Processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the  confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 539396700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenu(String)"
});
formatter.result({
  "duration": 463222700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 816684500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 89088500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 185833600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 107990300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 112890100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 208158000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 73725700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 688371300,
  "status": "passed"
});
formatter.after({
  "duration": 771748200,
  "status": "passed"
});
});