#!/bin/bash

echo "🗄️  Database Import Script (Dump Format)"
echo "========================================="

# Check if PostgreSQL container is running
if ! docker ps | grep -q strapi-postgres; then
    echo "❌ PostgreSQL container is not running!"
    echo "💡 Start it with: docker-compose up -d postgres"
    exit 1
fi

# Check if dump file exists
echo "🔍 Looking for dump files..."
if ls database/dumps/*.dump 1> /dev/null 2>&1; then
    DUMP_FILE=$(ls database/dumps/*.dump | head -1)
    echo "📦 Found dump file: $DUMP_FILE"
    
    echo "⏳ Importing database dump..."
    echo "📥 This may take a few minutes depending on the dump size..."
    
    # Import the dump with proper flags
    docker exec -i strapi-postgres pg_restore \
        -U kaizen \
        -d kaizen \
        --clean \
        --if-exists \
        --no-owner \
        --no-privileges \
        < "$DUMP_FILE"
    
    if [ $? -eq 0 ]; then
        echo "✅ Database import completed successfully!"
        echo ""
        echo "🔗 You can now start Strapi with: npm run develop"
    else
        echo "❌ Database import failed!"
        echo "💡 Check the error messages above"
    fi
else
    echo "⚠️  No .dump file found in database/dumps/"
    echo "📝 Please place your .dump file in database/dumps/ directory"
    echo ""
    echo "📋 Available files in database/dumps/:"
    ls -la database/dumps/ 2>/dev/null || echo "   (directory is empty)"
fi

