"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var Languages = [
            { "id": 1, "name": "Java" },
            { "id": 2, "name": "HTML" },
            { "id": 3, "name": "Ruby On Rails" },
            { "id": 4, "name": "CSS" },
            { "id": 5, "name": "Angular 2" },
            { "id": 6, "name": "Node" },
            { "id": 7, "name": "Express" }
        ];
        return { languages: languages };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map