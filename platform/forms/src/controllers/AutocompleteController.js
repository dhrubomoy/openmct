/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2017, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define(
    [],
    function () {

        /**
         * Controller for the `autocomplete` form control.
         *
         * @memberof platform/forms
         * @constructor
         */
        function AutocompleteController($scope) {

            var key = {
                down: "ArrowDown",
                up: "ArrowUp",
                enter: "Enter"
            }

            function decrementOptionIndex() {
                if($scope.optionIndex === 0) {
                    $scope.optionIndex = $scope.filteredOptions.length+1;
                }
                $scope.optionIndex--;
            }

            function incrementOptionIndex() {
                if($scope.optionIndex === $scope.filteredOptions.length) {
                    $scope.optionIndex = -1;
                }
                $scope.optionIndex++;
            }

            function fillInputWithString(string) {
                $scope.hideOptions = true;
                // Hard coded!!
                $scope.ngModel[4] = string;
            }

            $scope.keyDown = function($event) {
                var eventKey = $event.key;
                if($scope.filteredOptions) {
                    switch(eventKey) {
                        case key.down:
                            incrementOptionIndex();
                            break;
                        case key.up:
                            decrementOptionIndex();
                            break;
                        case key.enter:
                            console.log($scope.filteredOptions[$scope.optionIndex].name);
                            fillInputWithString($scope.filteredOptions[$scope.optionIndex].name);
                    }
                }
            }

            $scope.filterOptions = function(string) {
                $scope.hideOptions = false; 
                var output = [];
                angular.forEach($scope.options, function(option) {
                    if(option.toLowerCase().indexOf(string.toLowerCase()) >= 0) {  
                        output.push(option);  
                    }
                });
                $scope.filteredOptions = output.map(function(elem, index) {
                    return {
                        optionId: index,
                        name: elem
                    }
                });
            }

            $scope.inputClicked = function($event) {
                $event.target.select();
                $scope.hideOptions = false;
                $scope.optionIndex = 0;
            }
            
            $scope.fillInput = function(string) {
                fillInputWithString(string);
            }

            $scope.optionMouseover = function(optionId) {
                $scope.optionIndex = optionId;
            }
        }

        return AutocompleteController;

    }
);