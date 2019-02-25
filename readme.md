Shopshop est une application simpliste de gestion de listes de course. Elle permet de :
- Préparer la liste des articles constituant une liste de course, avant d'aller en magasin pour les acheter,
- Pendant la collecte des articles en magasin : Distinguer les articles collectés des articles à récupérer.

## Structure de l'application

L'application est constituée de trois zones :

### 1. Zone d'ajout d'un nouvel article

Cette zone contient deux champs de saisie et un bouton :
* Un selecteur du nombre d'exemplaire attendus pour l'article à ajouter à la liste (input de type `select`).
* Un champs texte de saisie du libellé de l'article à ajouter, dont le placeholder est "Ajouter un article",
* Un bouton déclenchant l'ajout de l'article à la liste de course.

### 2. Zone d'affichage des items de la liste de course

On y retrouve sous forme de liste les articles ajoutés à la liste de course. Chaque entrée dans la liste contient :
* Un champs input de type checkbox déterminant si l'article à été collecté,
* Le nombre d'exemplaires de l'article,
* Le libellé de l'article,
* Un bouton permettant la suppression de l'article de la liste de course.

### 3. Zone récapitulative

Cette zone contient une phrase résumant l'état de la liste de courses. Cette phrase dépend de l'état de la liste de course.

## Règles de gestion

* Au chargement de l'application, la valeur du sélecteur du nombre d'article est égal à 1,
* Les valeurs possibles pour le sélecteur du nombre d'exemplaire vont de 1 à 10,
* Il n'est pas possible d'ajouter un item sans libellé ou contenant uniquement des blancs, ainsi l'appui sur le bouton d'ajout si le libellé est vide ou ne contient que des espaces est sans effet,
* Il est possible de déclencher l'ajout dans la liste en cliquant sur le bouton d'ajout ou en tapant sur la touche entrée lorsque le focus est pris par le champs de saisie du libellé,
* Une checkbox sur chaque item détermine si l'item est déjà dans le panier ou doit être collecté.
* En cliquant sur le bouton de suppression d'un item, on le retire de la liste.

La phrase de la zone récapitulative peut prendre plusieurs valeurs :
* Lorsque la liste ne contient aucun article : "La liste est vide.",
* Lorsque la liste contient un article à récupérer : "Encore un article à récupérer.",
* Lorsque tous les articles de la liste ont été récupérés : "Tous les articles ont été récupérés.",
* Sinon, la phrase contient le nombre d'article encore à récupérer (en sommant le nombre d'exemplaires attendus pour chaque article) : "Encore **X** articles à récupérer."