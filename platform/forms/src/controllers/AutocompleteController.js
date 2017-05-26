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
         * Controller for the `datetime` form control.
         * This is a composite control; it includes multiple
         * input fields but outputs a single timestamp (in
         * milliseconds since start of 1970) to the ngModel.
         *
         * @memberof platform/forms
         * @constructor
         */
        function AutocompleteController($scope) {

            $scope.keyDown = function($event) {
                if($event.key == "ArrowDown") {
                    console.log($event);
                }
            }

            $scope.complete = function(string){ 
                $scope.hideOptions = false;  
                var output = [];
                angular.forEach($scope.options, function(option) {
                    if(option.toLowerCase().indexOf(string.toLowerCase()) >= 0) {  
                        output.push(option);  
                    }
                });  
                $scope.filteredOptions = output;
            }

            $scope.inputClicked = function($event) {
                $event.target.select();
                $scope.hideOptions = true;
                //$event.target.select();
            }
            
            $scope.fillTextbox = function(string) {
                $scope.hideOptions = true;
                // Hard coded!!
                $scope.ngModel[4] = string;
            }
        }

        return AutocompleteController;

    }
);