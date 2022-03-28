import mongoose from "mongoose";

//Got this schema by this tool: https://transform.tools/json-to-mongoose
const pokemonSchema = mongoose.Schema({
    "abilities": {
      "type": [
        "Mixed"
      ]
    },
    "base_experience": {
      "type": "Number"
    },
    "forms": {
      "type": [
        "Mixed"
      ]
    },
    "game_indices": {
      "type": [
        "Mixed"
      ]
    },
    "height": {
      "type": "Number"
    },
    "held_items": {
      "type": [
        "Mixed"
      ]
    },
    "id": {
      "type": "Number"
    },
    "is_default": {
      "type": "Boolean"
    },
    "location_area_encounters": {
      "type": "String"
    },
    "moves": {
      "type": [
        "Mixed"
      ]
    },
    "name": {
      "type": "String"
    },
    "order": {
      "type": "Number"
    },
    "past_types": {
      "type": "Array"
    },
    "species": {
      "name": {
        "type": "String"
      },
      "url": {
        "type": "String"
      }
    },
    "sprites": {
      "back_default": {
        "type": "String"
      },
      "back_female": {
        "type": "Mixed"
      },
      "back_shiny": {
        "type": "String"
      },
      "back_shiny_female": {
        "type": "Mixed"
      },
      "front_default": {
        "type": "String"
      },
      "front_female": {
        "type": "Mixed"
      },
      "front_shiny": {
        "type": "String"
      },
      "front_shiny_female": {
        "type": "Mixed"
      },
      "other": {
        "dream_world": {
          "front_default": {
            "type": "String"
          },
          "front_female": {
            "type": "Mixed"
          }
        },
        "home": {
          "front_default": {
            "type": "String"
          },
          "front_female": {
            "type": "Mixed"
          },
          "front_shiny": {
            "type": "String"
          },
          "front_shiny_female": {
            "type": "Mixed"
          }
        },
        "official-artwork": {
          "front_default": {
            "type": "String"
          }
        }
      },
      "versions": {
        "generation-i": {
          "red-blue": {
            "back_default": {
              "type": "String"
            },
            "back_gray": {
              "type": "String"
            },
            "back_transparent": {
              "type": "String"
            },
            "front_default": {
              "type": "String"
            },
            "front_gray": {
              "type": "String"
            },
            "front_transparent": {
              "type": "String"
            }
          },
          "yellow": {
            "back_default": {
              "type": "String"
            },
            "back_gray": {
              "type": "String"
            },
            "back_transparent": {
              "type": "String"
            },
            "front_default": {
              "type": "String"
            },
            "front_gray": {
              "type": "String"
            },
            "front_transparent": {
              "type": "String"
            }
          }
        },
        "generation-ii": {
          "crystal": {
            "back_default": {
              "type": "String"
            },
            "back_shiny": {
              "type": "String"
            },
            "back_shiny_transparent": {
              "type": "String"
            },
            "back_transparent": {
              "type": "String"
            },
            "front_default": {
              "type": "String"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_shiny_transparent": {
              "type": "String"
            },
            "front_transparent": {
              "type": "String"
            }
          },
          "gold": {
            "back_default": {
              "type": "String"
            },
            "back_shiny": {
              "type": "String"
            },
            "front_default": {
              "type": "String"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_transparent": {
              "type": "String"
            }
          },
          "silver": {
            "back_default": {
              "type": "String"
            },
            "back_shiny": {
              "type": "String"
            },
            "front_default": {
              "type": "String"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_transparent": {
              "type": "String"
            }
          }
        },
        "generation-iii": {
          "emerald": {
            "front_default": {
              "type": "String"
            },
            "front_shiny": {
              "type": "String"
            }
          },
          "firered-leafgreen": {
            "back_default": {
              "type": "String"
            },
            "back_shiny": {
              "type": "String"
            },
            "front_default": {
              "type": "String"
            },
            "front_shiny": {
              "type": "String"
            }
          },
          "ruby-sapphire": {
            "back_default": {
              "type": "String"
            },
            "back_shiny": {
              "type": "String"
            },
            "front_default": {
              "type": "String"
            },
            "front_shiny": {
              "type": "String"
            }
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            "back_default": {
              "type": "String"
            },
            "back_female": {
              "type": "Mixed"
            },
            "back_shiny": {
              "type": "String"
            },
            "back_shiny_female": {
              "type": "Mixed"
            },
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_shiny_female": {
              "type": "Mixed"
            }
          },
          "heartgold-soulsilver": {
            "back_default": {
              "type": "String"
            },
            "back_female": {
              "type": "Mixed"
            },
            "back_shiny": {
              "type": "String"
            },
            "back_shiny_female": {
              "type": "Mixed"
            },
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_shiny_female": {
              "type": "Mixed"
            }
          },
          "platinum": {
            "back_default": {
              "type": "String"
            },
            "back_female": {
              "type": "Mixed"
            },
            "back_shiny": {
              "type": "String"
            },
            "back_shiny_female": {
              "type": "Mixed"
            },
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_shiny_female": {
              "type": "Mixed"
            }
          }
        },
        "generation-v": {
          "black-white": {
            "animated": {
              "back_default": {
                "type": "String"
              },
              "back_female": {
                "type": "Mixed"
              },
              "back_shiny": {
                "type": "String"
              },
              "back_shiny_female": {
                "type": "Mixed"
              },
              "front_default": {
                "type": "String"
              },
              "front_female": {
                "type": "Mixed"
              },
              "front_shiny": {
                "type": "String"
              },
              "front_shiny_female": {
                "type": "Mixed"
              }
            },
            "back_default": {
              "type": "String"
            },
            "back_female": {
              "type": "Mixed"
            },
            "back_shiny": {
              "type": "String"
            },
            "back_shiny_female": {
              "type": "Mixed"
            },
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_shiny_female": {
              "type": "Mixed"
            }
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_shiny_female": {
              "type": "Mixed"
            }
          },
          "x-y": {
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_shiny_female": {
              "type": "Mixed"
            }
          }
        },
        "generation-vii": {
          "icons": {
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            }
          },
          "ultra-sun-ultra-moon": {
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            },
            "front_shiny": {
              "type": "String"
            },
            "front_shiny_female": {
              "type": "Mixed"
            }
          }
        },
        "generation-viii": {
          "icons": {
            "front_default": {
              "type": "String"
            },
            "front_female": {
              "type": "Mixed"
            }
          }
        }
      }
    },
    "stats": {
      "type": [
        "Mixed"
      ]
    },
    "types": {
      "type": [
        "Mixed"
      ]
    },
    "weight": {
      "type": "Number"
    },
    "pokedex-entry": {
        "type": "String"
    }
  });

//Allow search pokemons by a string
pokemonSchema.statics.findByString = function(name){
  return this.where({ name: new RegExp(name, 'i')})
}

export const Pokemon = mongoose.model("Pokemon", pokemonSchema);