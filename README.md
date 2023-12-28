# not8bit-menu - QB
Menu System for FiveM

# Discord: 

**https://discord.gg/syG8ZpZ6je**

# To Do:
```
Update text layout
Image layout
Add ability to change theme easier
```

# Dependencies
```
qb-core
```

# Bugs
```
Not really a bug but the text can get what I consider is a little too close to the image. I will fix that in a future update.
```

# Features 
```
Unlimited text rows. The limit is what looks good.
The image is on the right now.
```

## EXAMPLE MENU
```
RegisterNetEvent('not8bit-script:client:openAnotherMenuOrSomething', function()
    local containerMenu = {
        {
            header = "Main Title",
            isMenuHeader = true,
        },
        {
            header = "Button Header",
            icon = 'image.png',
            messages = {
                "SUb Headers",
                "You can add a lot",
                "You limit is what looks good.",
                "The code should accept unlimited rows of text"
            },
            params = {
                event = "not8bit-menu:client:testMenu2",
                args = {
                    number = 1,
                }
            }
        },
        {
            header = "Sub Menu Button",
            icon = 'image.png',
            messages = {
                "Something relevant",
                "Something relevant"
            },
            disabled = true,
            params = {
                event = "not8bit-menu:client:testMenu2",
                args = {
                    number = 1,
                }
            }
        },
        {
            header = "Sub Menu Button",
            icon = 'image.png',
            messages = {
                "Something relevant",
                "Something relevant"
            },
            isDisabled = true,
            params = {
                event = "not8bit-menu:sever:yourserversidefunction",
                isServer = true,
                args = {
                    number = 1,
                }
            }
        },
        {
            header = "Sub Menu Button",
            icon = 'image.png',
            messages = {
                "Something relevant",
                "Something relevant"
            },
            disabled = true,
            params = {
                event = 'id',
                isCommand = true,
            }
        },
    }
    exports['not8bit-menu-qb']:openMenu(containerMenu) --Use only one
	TriggerEvent('not8bit-menu-qb:client:openMenu', containerMenu) -- Use only one
end)
```
# License
```
    Not 8 Bit Menu QB
    Copyright (C) 2023  lllHolidaylll

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
```
# This is a modified version of:

# QB-Menu 
**https://github.com/qbcore-framework/qb-menu/tree/main**